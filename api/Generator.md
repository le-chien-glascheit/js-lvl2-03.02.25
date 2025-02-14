
1. npx @openapitools/openapi-generator-cli generate -i api.yml -g typescript-fetch --additional-properties=npmName=@dev/tsclient,supportsES6=true -o tsclient

2. vite create openapi-app

3. npm i tsclient

4. npm i openapi-app

5. (optional) npm link ../tsclient