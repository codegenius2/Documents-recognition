#!/bin/sh

docker run --user "$(id -u):$(id -g)" --rm -v "${PWD}:/client" -v "${DOCS_DEFINITION_FOLDER}:/definitions" \
openapitools/openapi-generator-cli generate -g typescript-axios \
-i /definitions/index.yml -o /client/src -c /client/ts-generator-config.json \
-t /client/generator-templates/ || exit 1

npm run format || exit 0
