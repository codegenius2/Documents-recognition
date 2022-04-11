import {
  CheckResult,
  CrossSourceValueComparison,
  Source,
  SourceValidity,
  TextField as BaseTextField,
  TextFieldType,
  TextFieldValue
} from "../models/index.js";

const LCID_MAP: Record<number, string> = {
  0: 'Latin',
  1078: 'Afrikaans',
  1052: 'Albanian',
  5121: 'Arabic (Algeria)',
  15361: 'Arabic (Bahrain)',
  3073: 'Arabic (Egypt)',
  2049: 'Arabic (Iraq)',
  11265: 'Arabic (Jordan)',
  13313: 'Arabic (Kuwait)',
  12289: 'Arabic (Lebanon)',
  4097: 'Arabic (Libya)',
  6145: 'Arabic (Morocco)',
  8193: 'Arabic (Oman)',
  16385: 'Arabic (Qatar)',
  1025: 'Arabic (Saudi Arabia)',
  10241: 'Arabic (Syria)',
  7169: 'Arabic (Tunisia)',
  14337: 'Arabic (U.A.E.)',
  9217: 'Arabic (Yemen)',
  1067: 'Arabic Armenian',
  2092: 'Azeri (Cyrillic)',
  1068: 'Azeri (Latin)',
  1069: 'Basque',
  1059: 'Belarusian',
  1026: 'Bulgarian',
  1027: 'Catalan',
  3076: 'Chinese (HongKong S.A.R.)',
  5124: 'Chinese (Macao S.A.R.)',
  2052: 'Chinese',
  4100: 'Chinese (Singapore)',
  1028: 'Chinese (Taiwan)',
  1050: 'Croatian',
  1029: 'Czech',
  1030: 'Danish',
  1125: 'Divehi',
  2067: 'Dutch (Belgium)',
  1043: 'Dutch (Netherlands)',
  3081: 'English (Australia)',
  10249: 'English (Belize)',
  4105: 'English (Canada)',
  9225: 'English (Caribbean)',
  6153: 'English (Ireland)',
  8201: 'English (Jamaica)',
  5129: 'English (New Zealand)',
  13321: 'English (Philippines)',
  7177: 'English (South Africa)',
  11273: 'English (Trinidad)',
  2057: 'English (United Kingdom)',
  1033: 'English (United States)',
  12297: 'English (Zimbabwe)',
  1061: 'Estonian',
  1080: 'Faroese',
  1065: 'Farsi',
  1035: 'Finnish',
  2060: 'French (Belgium)',
  3084: 'French (Canada)',
  1036: 'French (France)',
  5132: 'French (Luxembourg)',
  6156: 'French (Monaco)',
  4108: 'French (Switzerland)',
  1071: 'FYRO Macedonian',
  1110: 'Galician',
  1079: 'Georgian',
  3079: 'German (Austria)',
  1031: 'German (Germany)',
  5127: 'German (Liechtenstein)',
  4103: 'German (Luxembourg)',
  2055: 'German (Switzerland)',
  1032: 'Greek',
  1095: 'Gujarati',
  1037: 'Hebrew',
  1081: 'Hindi (India)',
  1038: 'Hungarian',
  1039: 'Icelandic',
  1057: 'Indonesian',
  1040: 'Italian (Italy)',
  2064: 'Italian (Switzerland)',
  1041: 'Japanese',
  1099: 'Kannada',
  1087: 'Kazakh',
  1111: 'Konkani',
  1042: 'Korean',
  1088: 'Kyrgyz (Cyrillic)',
  1062: 'Latvian',
  1063: 'Lithuanian',
  2110: 'Malay (Brunei Darussalam)',
  1102: 'Marathi',
  1086: 'Malay (Malaysia)',
  1104: 'Mongolian (Cyrillic)',
  1044: 'Norwegian (Bokmal)',
  2068: 'Norwegian (Nynorsk)',
  1045: 'Polish',
  1046: 'Portuguese (Brazil)',
  2070: 'Portuguese (Portugal)',
  1094: 'Punjabi',
  1047: 'Rhaeto-Romanic',
  1048: 'Romanian',
  1049: 'Russian',
  1103: 'Sanskrit',
  3098: 'Serbian (Cyrillic)',
  2074: 'Serbian (Latin)',
  1051: 'Slovak',
  1060: 'Slovenian',
  11274: 'Spanish (Argentina)',
  16394: 'Spanish (Bolivia)',
  13322: 'Spanish (Chile)',
  9226: 'Spanish (Colombia)',
  5130: 'Spanish (Costa Rica)',
  7178: 'Spanish (Dominican Republic)',
  12298: 'Spanish (Ecuador)',
  17418: 'Spanish (El Salvador)',
  4106: 'Spanish (Guatemala)',
  18442: 'Spanish (Honduras)',
  3082: 'Spanish (International Sort)',
  2058: 'Spanish (Mexico)',
  19466: 'Spanish (Nicaragua)',
  6154: 'Spanish (Panama)',
  15370: 'Spanish (Paraguay)',
  10250: 'Spanish (Peru)',
  20490: 'Spanish (Puerto Rico)',
  1034: 'Spanish (Traditional Sort)',
  14346: 'Spanish (Uruguay)',
  8202: 'Spanish (Venezuela)',
  1089: 'Swahili',
  1053: 'Swedish',
  2077: 'Swedish (Finland)',
  1114: 'Syriac',
  1097: 'Tamil',
  1092: 'Tatar',
  1098: 'Telugu',
  1054: 'Thai (Thailand)',
  1055: 'Turkish',
  1058: 'Ukrainian',
  1056: 'Urdu',
  2115: 'Uzbek (Cyrillic)',
  1091: 'Uzbek (Latin)',
  1066: 'Vietnamese',
  1064: 'Tajik (Cyrillic)',
  1090: 'Turkmen',
  50001: 'CTC Simplified',
  50002: 'CTC Traditional',
  9999: 'Custom',
}
export class TextField implements BaseTextField {

  // see BaseTextField for docs
  fieldType: TextFieldType;
  fieldName: string;
  lcid?: number;

  status: CheckResult;
  validityStatus: CheckResult;
  comparisonStatus: CheckResult;

  value: string
  valueList: Array<TextFieldValue>;
  validityList: Array<SourceValidity>;
  comparisonList: Array<CrossSourceValueComparison>;

  constructor(origin: BaseTextField) {
    this.fieldType = origin.fieldType;
    this.fieldName = origin.fieldName;
    this.lcid = origin.lcid;
    this.status = origin.status;
    this.validityStatus = origin.validityStatus;
    this.comparisonStatus = origin.comparisonStatus;
    this.value = origin.value;
    this.valueList = origin.valueList;
    this.validityList = origin.validityList;
    this.comparisonList = origin.comparisonList;
  }

  /**
   * This method returns value of the text field. Value encoded in UTF8.
   * Fields value obtained in the following order:
   * - if MRZ value is present, it will be taken
   * - if no MRZ, but RFID value is present, it will be taken
   * - if no MRZ, no RFID, but Barcode value is present, it will be taken
   * - if no MRZ, no RFID, no Barcode, but Visual OCR value is present, it will be taken
   *
   * @param source See {@code Source}
   * @param original Each value formatted according to input params and server settings.
   * To get original representation, set this flag to true. Date example:
   *  - original visual value - "3 January 2009"
   *  - formatted value - "03.01.2009"
   */
  public getValue(source?: Source, original = false): string | undefined {

    if (!source) {
      return this.value;
    }

    const value = this.getValueBySource(source)
    if (original) {
      return value?.originalValue;
    }
    return value?.value;
  }

  /**
   * Returns validity check of all values for given source.
   * @param source See {@code Source}
   */
  public sourceValidity(source: Source): CheckResult {
    for (const validity of this.validityList) {
      if (validity.source === source) {
        return validity.status;
      }
    }
    return CheckResult.WAS_NOT_DONE;
  }

  /**
   * Returns value matching result for different sources.
   */
  public crossSourceComparison(one: Source, other: Source): CheckResult {
    for (const c of this.comparisonList) {
      if ((c.sourceLeft === one && c.sourceRight === other) || (c.sourceLeft === other && c.sourceRight === one)) {
        return c.status;
      }
    }
    return CheckResult.WAS_NOT_DONE;
  }

  public getLCIDName(): string | undefined {
    if (this.lcid) {
      return LCID_MAP[this.lcid] || String(this.lcid);
    }
  }

  private getValueBySource(source: Source): TextFieldValue | undefined {
    for (const value of this.valueList) {
      if (value.source == source) {
        return value;
      }
    }
    return undefined;
  }
}
