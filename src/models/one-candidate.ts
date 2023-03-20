/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FDSIDList } from './fdsidlist';
import { RfidLocation } from './rfid-location';

/**
 * Contains information about one document type candidate
 * @export
 * @interface OneCandidate
 */
export interface OneCandidate {
    /**
     * Document name
     * @type {string}
     * @memberof OneCandidate
     */
    DocumentName?: string;
    /**
     * Unique document type template identifier (Regula\'s internal numeric code)
     * @type {number}
     * @memberof OneCandidate
     */
    ID?: number;
    /**
     * A measure of the likelihood of correct recognition in the analysis of this type of document
     * @type {number}
     * @memberof OneCandidate
     */
    P?: number;
    /**
     * 
     * @type {RfidLocation}
     * @memberof OneCandidate
     */
    RFID_Presence?: RfidLocation;
    /**
     * 
     * @type {FDSIDList}
     * @memberof OneCandidate
     */
    FDSIDList?: FDSIDList;
    /**
     * Combination of lighting scheme identifiers (Light enum) required to conduct OCR for this type of document
     * @type {number}
     * @memberof OneCandidate
     */
    NecessaryLights?: number;
    /**
     * Set of authentication options provided for this type of document (combination of Authenticity enum)
     * @type {number}
     * @memberof OneCandidate
     */
    CheckAuthenticity?: number;
    /**
     * The required exposure value of the camera when receiving images of a document of this type for a UV lighting scheme
     * @type {number}
     * @memberof OneCandidate
     */
    UVExp?: number;
    /**
     * Combination of lighting scheme identifiers (combination of Light enum) needed to perform all authenticity checks specified in CheckAuthenticity
     * @type {number}
     * @memberof OneCandidate
     */
    AuthenticityNecessaryLights?: number;
}


