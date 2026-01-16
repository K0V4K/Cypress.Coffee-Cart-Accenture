const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

const jsonDir = 'cypress/reports/cucumber-json';
const reportPath = 'cypress/reports/html-report';

// 1. Gera o Relatório
report.generate({
    jsonDir: jsonDir,
    reportPath: reportPath,
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local Test Machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Run Info',
        data: [
            {label: 'Projeto', value: 'Coffee Cart Accenture'},
            {label: 'Versão', value: '1.0.0 - God Tier'},
            {label: 'QA Engineer', value: 'Valter Pereira Da Silva Filho'}
        ]
    }
});

// 2. Personalização (O Pulo do Gato)
setTimeout(() => {
    console.log('🔄 Carregando Relatório Html)...');
    
    const htmlFile = `${reportPath}/index.html`;

    try {
        let htmlContent = fs.readFileSync(htmlFile, 'utf8');

        // --- A. Ajuste de Texto e Layout ---
        htmlContent = htmlContent.replace(
            /Maintained by .*/g, 
            'Desenvolvido por <strong>Valter Pereira Filho</strong>.<br><span style="display:block; margin-top:5px;">Conecte-se:</span>'
        );

        // --- B. Links Pessoais (LinkedIn e GitHub) ---
        // Aqui também garantimos que pegamos o ícone com fa-2x se ele existir no link
        htmlContent = htmlContent.replace(
            /href="https:\/\/www.linkedin.com\/.*?"/g, 
            'href="https://www.linkedin.com/in/valterpereirafilho/" target="_blank"'
        );
        htmlContent = htmlContent.replace(
            /href="https:\/\/github.com\/.*?"/g, 
            'href="https://github.com/K0V4K" target="_blank"'
        );

        // --- C. REMOÇÃO DOS ÍCONES INDESEJADOS (CORREÇÃO fa-2x) ---
        // Agora usamos uma Expressão Regular (Regex) mais poderosa.
        // Ela diz: "Encontre qualquer coisa que tenha 'fa-stack-overflow' e apague a tag inteira"
        
        // Remove StackOverflow (com ou sem fa-2x)
        htmlContent = htmlContent.replace(/<i class="fa fa-stack-overflow.*?"><\/i>/g, '');
        
        // Remove YouTube (com ou sem fa-2x)
        htmlContent = htmlContent.replace(/<i class="fa fa-youtube.*?"><\/i>/g, '');
        
        // Remove Twitter (com ou sem fa-2x)
        htmlContent = htmlContent.replace(/<i class="fa fa-twitter.*?"><\/i>/g, '');

        // Salva
        fs.writeFileSync(htmlFile, htmlContent);
        
        console.log('✅ Relatório Gerado!.');

    } catch (err) {
        console.error('❌ Falha Ao Carregar Relatório.:', err);
    }
}, 2000);