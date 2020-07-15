import {ProcessParams} from "../models";
import {ProcessRequestImage} from "./process-request-image";

export type Base64String = string;

export interface ProcessRequest {

    /**
     *
     * @type {ProcessParams}
     * @memberof ProcessRequest
     */
    processParam?: ProcessParams;

    /**
     *
     * @type {Array<ProcessRequestImage>}
     * @memberof ProcessRequest
     */
    images: Array<ProcessRequestImage | ArrayBuffer | Base64String>;
}


