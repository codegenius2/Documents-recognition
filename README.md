# Regula Document Reader js client for the browser and node.js based on axios

[![npm version](https://img.shields.io/npm/v/@regulaforensics/document-reader-client?color=yellow&style=flat-square)](https://www.npmjs.org/package/@regulaforensics/document-reader-client)
![npm type definitions](https://img.shields.io/npm/types/typescript?style=flat-square&collor=858df6)
[![documentation](https://img.shields.io/badge/docs-en-f6858d?style=flat-square)](https://support.regulaforensics.com/hc/en-us/articles/115000916306-Documentation)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-defs-0a8c42?style=flat-square)](https://github.com/regulaforensics/DocumentReader-api-openapi)


Documents recognition as easy as reading two bytes.

## Install package

```
npm install @regulaforensics/document-reader-client
```
## Example

Performing request:
```js
import {DocumentReaderApi, FieldType, GraphicFieldType} from '@regulaforensics/document-reader-client/esm'
const {DOCUMENT_NUMBER, SURNAME_AND_GIVEN_NAMES, DATE_OF_BIRTH} = FieldType;
const {PORTRAIT, SIGNATURE} = GraphicFieldType;

const imageAsBase64String = getDocImageAsBase64String()
const api = new DocumentReaderApi({basePath: "http://localhost:8080"});
const result = await api.process(imageAsBase64String)
```

Parsing results:
```js
// text fields
const docNumber = result.getTextField(DOCUMENT_NUMBER)
const fullName = result.getTextField(SURNAME_AND_GIVEN_NAMES)
const dateOfBirth = result.getTextField(DATE_OF_BIRTH)
    
// graphics fields
const portraitAsBase64 = result.getGraphicsField(PORTRAIT)
const signatureAsBase64 = result.getGraphicsField(SIGNATURE)
```
## Compatibility

Language level
* ES5, ES6.Promises - depends on a native ES6 Promise implementation to be supported. If your environment doesn't support ES6 Promises, you can polyfill.

Module system
* CommonJS
* ES6 module system

Definitions
* TypeScript's definitions should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Development

Js client is written using typescript, based on [openapi spec](https://github.com/regulaforensics/DocumentReader-api-openapi). 
Openapi-generator used as implementation base(see generated packages `/src/api`, `/scr/models`). 
All custom logic, on top of generated files should be places in `/src/ext` folder.

To regenerate models from openapi definition, 
clone [latest open api definitions](https://github.com/regulaforensics/DocumentReader-api-openapi)
and set `DEFINITION_FOLDER` as path to cloned directory.
```bash
DEFINITION_FOLDER="/home/user/projects/DocumentReader-api-openapi"
```
Then use next command from the project root.
```bash
docker run --rm -v "${PWD}:/client" -v "${DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates/
```
