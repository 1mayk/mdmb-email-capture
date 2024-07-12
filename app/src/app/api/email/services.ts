import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '..', '..', '..', 'public', 'emails.json');

// Função para armazenar um email em um documento JSON
export function storeEmail(email: string): void | string {
    let emails: string[] = [];

    try {
        // Verificar se o arquivo já existe e ler o conteúdo
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            emails = JSON.parse(data);
        } else {
            // Verificar se o diretório existe, caso contrário, criar
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        }

        // Adicionar o novo email ao array
        emails.push(email);

        // Escrever o array atualizado de volta ao arquivo JSON
        fs.writeFileSync(filePath, JSON.stringify(emails, null, 2), 'utf8');
    } catch (error) {
        console.error('Erro ao armazenar o email:', error);
    }
}

// Função para ler o conteúdo do arquivo e retornar em formato JSON
export function readEmails(): string {
    try {
        if (!fs.existsSync(filePath)) {
            return JSON.stringify([], null, 2); // Retornar um array vazio se o arquivo não existir
        }

        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (error) {
        console.error('Erro ao ler os emails:', error);
        return JSON.stringify([], null, 2); // Retornar um array vazio em caso de erro
    }
}
