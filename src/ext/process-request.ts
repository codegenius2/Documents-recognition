import {ProcessParams, ProcessSystemInfo} from "../models/index.js";
import {ProcessRequestImage} from "./process-request-image.js";

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

    /**
     *
     * @type {ProcessParams}
     * @memberof ProcessRequest
     */
    systemInfo?: ProcessSystemInfo;
}

export const instanceOfProcessRequest = (data: any): data is ProcessRequest => {
    return 'images' in data
}
