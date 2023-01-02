# blockchaintypescript
# following this doc https://medium.com/@hernackikacper/blockchain-with-typescript-part-i-source-code-included-d18c129bdd35
<!-- # to setup node.js and package.json -->
# npm init -y 
<!-- # install type script - to install locally -->
# npm install typescript --save-dev
<!-- # auto correct completion on node apis -->
# npm install @types/node --save-dev
<!-- # creating tsconfig.json -->
# npx tsc --init --rootDir src --outDir build \
# --esModuleInterop --resolveJsonModule --lib es6 \
# --module commonjs --allowJs true --noImplicitAny true
<!-- # create source directory -->
# mkdir src
# touch src/index.ts
