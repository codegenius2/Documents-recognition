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
    for (const field of this.fieldList) {
      if (field.fieldType == type) {
        return field
      }
    }
    return undefined
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
      fieldValue = this.getValueBySource(Source.RFID) || this.getValueBySource(Source.VISUAL)
        || this.getValueBySource(Source.BARCODE)
    } else {
      fieldValue = this.getValueBySource(source)
    }

    if (!fieldValue) {
      return undefined
    }

    if (original) {
      return base64ToBuffer(fieldValue.originalValue)
    }
    return base64ToBuffer(fieldValue.value)
  }

  private getValueBySource(source: Source): ImagesFieldValue | undefined {
    for (const value of this.valueList) {
      if (value.source == source) {
        return value
      }
    }
    return undefined
  }
}

function base64ToBuffer(str: string): ArrayBuffer {
  return converter.decode(str);
}
