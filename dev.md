# Development

Js client is written using typescript, mainly generated from [openapi spec](https://github.com/regulaforensics/DocumentReader-api-openapi). 
Openapi-generator output used as implementation base(see packages `/src/api`, `/scr/models`). 
All custom logic, on top of generated files, should be places in `/src/ext` folder.

To regenerate models from openapi definition, 
clone [latest open api definitions](https://github.com/regulaforensics/DocumentReader-api-openapi)
and set `DEFINITION_FOLDER` as path to cloned directory, for example:
```bash
DEFINITION_FOLDER="/home/user/projects/DocumentReader-api-openapi"
```
Then use next command from the project root:
```bash
docker run --rm -v "${PWD}:/client" -v "${DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates/
```