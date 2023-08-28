FROM node:14
WORKDIR /usr/src/app
COPY api/package*.json ./
RUN npm install 
# Copy the source code to container.
COPY api/ .
EXPOSE 8080
CMD ["npm","start"]