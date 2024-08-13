# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale as dependências globais necessárias (como o TypeScript)
RUN npm install -g typescript

# Copie o restante do código da aplicação para o contêiner
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta que será usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]