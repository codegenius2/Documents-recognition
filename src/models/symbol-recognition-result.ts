/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RectangleCoordinates } from './rectangle-coordinates';
import { SymbolCandidate } from './symbol-candidate';

/**
 * Describes the result of recognizing a single character in text field line
 * @export
 * @interface SymbolRecognitionResult
 */
export interface SymbolRecognitionResult {
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof SymbolRecognitionResult
     */
    SymbolRect?: RectangleCoordinates;
    /**
     * Array of candidate characters. Sorted in decreasing order of recognition probabilities (the first element has highest probability)
     * @type {Array<SymbolCandidate>}
     * @memberof SymbolRecognitionResult
     */
    ListOfCandidates?: Array<SymbolCandidate>;
}


