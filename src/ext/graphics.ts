import {BaseResultItem} from "./result-item.js";
import {GraphicFieldsList, GraphicFieldType, GraphicsResult, RawImageContainer} from "../models/index.js";


export class Graphics extends BaseResultItem implements GraphicsResult {
    DocGraphicsInfo: GraphicFieldsList

    constructor(graphics: GraphicsResult) {
        super(graphics)
        this.DocGraphicsInfo = graphics.DocGraphicsInfo
    }

    public getImage(type: GraphicFieldType): RawImageContainer | undefined {
        return this.DocGraphicsInfo?.pArrayFields.find(field => field.FieldType == type)?.image
    }

    public getImages(): Array<RawImageContainer> {
        return this.DocGraphicsInfo?.pArrayFields.map(field => field.image)
    }
}