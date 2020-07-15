import {ProcessRequestImage as ProcessRequestImageBase} from "../models";
import {Base64String} from "./process-request";

export interface ProcessRequestImage extends Omit<ProcessRequestImageBase, 'ImageData'> {
    ImageData: ArrayBuffer | Base64String
}