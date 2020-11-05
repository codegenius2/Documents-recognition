#!/bin/sh

DOCS_DEFINITION_FOLDER="${PWD}/../DocumentReader-web-openapi" \
\
&& docker run --user "$(id -u):$(id -g)" --rm -v "${PWD}:/client" -v "$DOCS_DEFINITION_FOLDER:/definitions" \
openapitools/openapi-generator-cli:v5.0.0-beta2 generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates/ || exit 1

npm run format || exit 0
