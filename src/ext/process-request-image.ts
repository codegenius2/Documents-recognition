import {ProcessRequestImage as ProcessRequestImageBase} from "../models/index.js";
import {Base64String} from "./process-request.js";

export interface ProcessRequestImage extends Omit<ProcessRequestImageBase, 'ImageData'> {
    ImageData: ArrayBuffer | Base64String
}
