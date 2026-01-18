const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const jsonDir = 'cypress/reports/cucumber-json';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" }); 

async function analyzeFailures() {
    if (!process.env.GEMINI_API_KEY) {
        console.warn("⚠️ GEMINI_API_KEY não encontrada. Pulando análise de IA.");
        return;
    }
    
    console.log("🤖 Iniciando Agente de IA (Modelo: Gemini Flash Latest)...");

    if (fs.existsSync(jsonDir)) {
        const files = fs.readdirSync(jsonDir);

        for (const file of files) {
            if (file.endsWith('.json')) {
                const filePath = path.join(jsonDir, file);
                const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                let fileModified = false;
                
                for (const feature of jsonData) {
                    for (const element of feature.elements) {
                        for (const step of element.steps) {
                            if (step.result.status === 'failed' && step.result.error_message) {
                                
                                const marker = "\n\n🤖 CONSULTORIA IA (GEMINI):";
                                if (step.result.error_message.includes(marker)) {
                                    step.result.error_message = step.result.error_message.split(marker)[0];
                                }

                                console.log(`🔍 Analisando erro no step: "${step.name}"...`);
                                
                                const prompt = `
                                    Você é um QA Lead Sênior.
                                    Analise este erro do Cypress/Javascript.
                                    Seja muito breve (máximo 2 frases).
                                    Dê a causa provável e a solução técnica.
                                    Não use Markdown, apenas texto puro.
                                    
                                    Erro: ${step.result.error_message}
                                `;

                                try {
                                    const result = await model.generateContent(prompt);
                                    const response = await result.response;
                                    const text = response.text();
                                    const iaSignature = "\n\n🤖 CONSULTORIA IA (GEMINI):\n========================\n";
                                    
                                    step.result.error_message = step.result.error_message.trim() + iaSignature + text;

                                    fileModified = true;
                                    console.log("✅ Análise injetada VISIVELMENTE no erro!");
                                } catch (err) {
                                    console.error("❌ Erro ao consultar Gemini:", err.message);
                                }
                            }
                        }
                    }
                }

                if (fileModified) {
                    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
                }
            }
        }
    } else {
        console.log("⚠️ Pasta de relatórios não encontrada.");
    }
}

analyzeFailures();