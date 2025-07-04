# Usa uma imagem mínima do Nginx
FROM nginx:alpine

# Apaga os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tudo da raiz do projeto para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
