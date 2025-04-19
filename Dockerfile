# Usa a imagem oficial do Node
FROM node:16.20.2

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera a versão de produção do app React
RUN npm run build

# Instala o 'serve' para servir os arquivos estáticos
RUN npm install -g serve

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar o app
CMD ["serve", "-s", "build", "-l", "3000"]

