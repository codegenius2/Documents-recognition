/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AuthenticityCheckResultItem } from './authenticity-check-result-item';
import { CheckDiagnose } from './check-diagnose';
import { CheckResult } from './check-result';
import { FiberResult } from './fiber-result';
import { IdentResult } from './ident-result';
import { ImageData } from './image-data';
import { Light } from './light';
import { OCRSecurityTextResult } from './ocrsecurity-text-result';
import { PhotoIdentResultAllOf } from './photo-ident-result-all-of';
import { RawImageContainerList } from './raw-image-container-list';
import { RectangleCoordinates } from './rectangle-coordinates';
import { SecurityFeatureResult } from './security-feature-result';

/**
 * @type PhotoIdentResult
 * @export
 */
export type PhotoIdentResult = AuthenticityCheckResultItem & PhotoIdentResultAllOf;



