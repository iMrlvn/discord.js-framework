FROM node:alpine
RUN mkdir -p /main/package
WORKDIR /main/package
ENV NODE_PATH=/usr/local/lib/node_modules
COPY package.json /main/package
COPY tsconfig.json /main/package
RUN npm i
COPY . /main/package
ENV NODE_PATH=/usr/local/lib/node_modules
LABEL name="mrlvn.js" version="5.0"
# Start the bot.
RUN npm run build
CMD ["node" ,"test"]