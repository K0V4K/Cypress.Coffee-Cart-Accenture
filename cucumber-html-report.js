const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = 'cypress/reports/cucumber-json';
const reportPath = 'cypress/reports/html-report';

let apiPing = 'N/A';
try {
    if (fs.existsSync(jsonDir)) {
        const files = fs.readdirSync(jsonDir);
        let totalDuration = 0;
        let requestCount = 0;

        files.forEach(file => {
            if (file.endsWith('.json')) {
                const filePath = path.join(jsonDir, file);
                const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                jsonData.forEach(feature => {
                    feature.elements.forEach(scenario => {
                        scenario.steps.forEach(step => {
                            if (step.name && step.name.includes('envio uma requisição') && step.result.duration) {
                                totalDuration += step.result.duration;
                                requestCount++;
                            }
                        });
                    });
                });
            }
        });

        if (requestCount > 0) {
            const avgTime = Math.round((totalDuration / requestCount) / 1000000);
            apiPing = `${avgTime}ms ⚡`;
            console.log(`📊 Ping Médio Detectado: ${apiPing}`);
        }
    }
} catch (err) {
    console.warn('⚠️ Erro ao calcular ping:', err.message);
}

report.generate({
    jsonDir: jsonDir,
    reportPath: reportPath,
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local Test Machine',
        platform: { name: 'windows', version: '11' }
    },
    customData: {
        title: 'Run Info',
        data: [
            {label: 'Projeto', value: 'Coffee Cart Accenture'},
            {label: 'Versão', value: '1.0.0 - Stable Version'},
            {label: 'QA Engineer', value: 'Valter Pereira Da Silva Filho'},
            {label: 'API Latency (Avg)', value: apiPing} 
        ]
    }
});

setTimeout(() => {
    console.log('🔄 Iniciando substituição do rodapé em TODOS os arquivos...');

    const novoRodape = `
    <div class="created-by">
        <div style="text-align: center; padding: 20px; border-top: 1px solid #e6e9ed; margin-top: 20px; background: #fff;">
            <p style="font-size: 14px; color: #555; margin-bottom: 10px;">
                Desenvolvido por <strong>Valter Pereira Da Silva Filho</strong>
            </p>
            <div>
                <a href="https://www.linkedin.com/in/valterpereirafilho/" target="_blank" style="margin: 0 10px; color: #5A738E; text-decoration: none;">
                    <i class="fa fa-linkedin fa-lg"></i>
                </a>
                <a href="https://github.com/K0V4K" target="_blank" style="margin: 0 10px; color: #5A738E; text-decoration: none;">
                    <i class="fa fa-github fa-lg"></i>
                </a>
            </div>
        </div>
    </div>
    `;

    function getAllHtmlFiles(dirPath, arrayOfFiles) {
        files = fs.readdirSync(dirPath);
        arrayOfFiles = arrayOfFiles || [];

        files.forEach(function(file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory()) {
                arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
            } else {
                if (file.endsWith('.html')) {
                    arrayOfFiles.push(path.join(dirPath, "/", file));
                }
            }
        });

        return arrayOfFiles;
    }

    try {
        if (fs.existsSync(reportPath)) {
            const allHtmlFiles = getAllHtmlFiles(reportPath);

            allHtmlFiles.forEach(filePath => {
                let htmlContent = fs.readFileSync(filePath, 'utf8');
                
                const regexRodapeAntigo = /<div class="created-by">[\s\S]*?<\/div>/g;

                if (regexRodapeAntigo.test(htmlContent)) {
                    htmlContent = htmlContent.replace(regexRodapeAntigo, novoRodape);
                } else {
                    htmlContent = htmlContent.replace('</body>', `${novoRodape}</body>`);
                }

                fs.writeFileSync(filePath, htmlContent);
            });
            
            console.log(`✅ Rodapé limpo e atualizado em ${allHtmlFiles.length} arquivos!`);
        }
    } catch (err) {
        console.error('❌ Erro na customização:', err);
    }
}, 3000);