# ============================
# Etapa 1: Instala dependências e build Vite
# ============================
FROM node:20-alpine AS deps
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json primeiro
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Faz o build de produção do Vite
RUN npm run build

# ============================
# Etapa 2: Servidor Nginx com autenticação
# ============================
FROM nginx:alpine
RUN apk add --no-cache apache2-utils

ARG USERNAME
ARG PASSWORD
RUN htpasswd -bc /etc/nginx/.htpasswd $USERNAME $PASSWORD

# Remove arquivos default
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do build do Vite
COPY --from=deps /app/dist /usr/share/nginx/html

# Copia nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000