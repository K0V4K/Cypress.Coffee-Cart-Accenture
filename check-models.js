const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  console.log("🔍 Consultando modelos disponíveis para sua chave...");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Test");
    console.log("✅ gemini-1.5-flash FUNCIONOU!");
  } catch (error) {
    console.log("❌ Teste rápido falhou. Detalhes:");
    console.log(error.message);
    
    console.log("\n📋 Tentando listar modelos via HTTP (Método Infalível)...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.models) {
            console.log("\n✅ MODELOS DISPONÍVEIS PARA VOCÊ:");
            data.models.forEach(m => {
                if (m.name.includes("gemini")) {
                    console.log(`   - ${m.name.replace('models/', '')}`);
                }
            });
            console.log("\n👉 Copie um dos nomes acima e coloque no ai-analyst.js");
        } else {
            console.log("⚠️ A API respondeu, mas não listou modelos. Verifique sua chave.");
            console.log(JSON.stringify(data, null, 2));
        }
    } catch (httpError) {
        console.error("Erro de conexão:", httpError);
    }
  }
}

listModels();