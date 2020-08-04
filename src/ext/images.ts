import {
  GraphicFieldType,
  Images as BaseImages,
  ImagesField as BaseImagesField,
  ImagesAvailableSource, ImagesFieldValue, Source
} from "../models/index.js";

// @ts-ignore
import converter from "base64-arraybuffer";

export class Images implements BaseImages {

  availableSourceList: Array<ImagesAvailableSource>;
  fieldList: Array<ImagesField>;

  constructor(origin: BaseImages) {
    this.availableSourceList = origin.availableSourceList
    this.fieldList = origin.fieldList.map(field => new ImagesField(field))
  }

  public getField(type: GraphicFieldType): ImagesField | undefined {
    return this.fieldList.find(field => field.fieldType == type)
  }

  public getFields(type: GraphicFieldType): Array<ImagesField> | undefined {
    return this.fieldList.filter(field => field.fieldType == type)
  }
}

export class ImagesField implements BaseImagesField {

  fieldName: string;
  fieldType: GraphicFieldType;
  valueList: Array<ImagesFieldValue>;

  constructor(origin: BaseImagesField) {
    this.fieldType = origin.fieldType
    this.fieldType = origin.fieldType
    this.valueList = origin.valueList
  }

  public getValue(source?: Source, original = false): ArrayBuffer | undefined {
    let fieldValue
    if (!source) {
      // rfid -> visual -> barcode
      fieldValue = this.valueList.find(v => v.source == Source.RFID)
        || this.valueList.find(v => v.source == Source.VISUAL)
        || this.valueList.find(v => v.source == Source.BARCODE)
    } else {
      fieldValue = this.valueList.find(v => v.source == source)
    }

    if (!fieldValue) {
      return undefined
    }

    if (original) {
      return base64ToBuffer(fieldValue.originalValue)
    }
    return base64ToBuffer(fieldValue.value)
  }
}

function base64ToBuffer(str: string): ArrayBuffer {
  return converter.decode(str);
}