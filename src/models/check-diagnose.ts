/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumeration contains identifiers which determinate the single document element authenticity check outcome reason
 * @export
 * @enum {string}
 */
export enum CheckDiagnose {
    UNKNOWN = 0,
    PASS = 1,
    INVALID_INPUT_DATA = 2,
    INTERNAL_ERROR = 3,
    EXCEPTION_IN_MODULE = 4,
    UNCERTAIN_VERIFICATION = 5,
    NECESSARY_IMAGE_NOT_FOUND = 7,
    PHOTO_SIDES_NOT_FOUND = 8,
    INVALID_CHECKSUM = 10,
    SYNTAX_ERROR = 11,
    LOGIC_ERROR = 12,
    SOURCES_COMPARISON_ERROR = 13,
    FIELDS_COMPARISON_LOGIC_ERROR = 14,
    INVALID_FIELD_FORMAT = 15,
    TRUE_LUMINESCENCE_ERROR = 20,
    FALSE_LUMINESCENCE_ERROR = 21,
    FIXED_PATTERN_ERROR = 22,
    LOW_CONTRAST_IN_IR_LIGHT = 23,
    INCORRECT_BACKGROUND_LIGHT = 24,
    BACKGROUND_COMPARISON_ERROR = 25,
    INCORRECT_TEXT_COLOR = 26,
    PHOTO_FALSE_LUMINESCENCE = 27,
    TOO_MUCH_SHIFT = 28,
    FIBERS_NOT_FOUND = 30,
    TOO_MANY_OBJECTS = 31,
    SPECKS_IN_UV = 33,
    TOO_LOW_RESOLUTION = 34,
    INVISIBLE_ELEMENT_PRESENT = 40,
    VISIBLE_ELEMENT_ABSENT = 41,
    ELEMENT_SHOULD_BE_COLORED = 42,
    ELEMENT_SHOULD_BE_GRAYSCALE = 43,
    PHOTO_WHITE_IR_DONT_MATCH = 44,
    UV_DULL_PAPER_MRZ = 50,
    FALSE_LUMINESCENCE_IN_MRZ = 51,
    UV_DULL_PAPER_PHOTO = 52,
    UV_DULL_PAPER_BLANK = 53,
    UV_DULL_PAPER_ERROR = 54,
    FALSE_LUMINESCENCE_IN_BLANK = 55,
    BAD_AREA_IN_AXIAL = 60,
    FALSE_IP_PARAMETERS = 65,
    FIELD_POS_CORRECTOR_HIGHLIGHT_IR = 80,
    OVI_IR_INVISIBLE = 90,
    OVI_INSUFFICIENT_AREA = 91,
    OVI_COLOR_INVARIABLE = 92,
    OVI_BAD_COLOR_FRONT = 93,
    OVI_BAD_COLOR_SIDE = 94,
    OVI_WIDE_COLOR_SPREAD = 95,
    OVI_BAD_COLOR_PERCENT = 96,
    HOLOGRAM_ELEMENT_ABSENT = 100,
    HOLOGRAM_SIDE_TOP_IMAGES_ABSENT = 101,
    HOLOGRAM_ELEMENT_PRESENT = 102,
    PHOTO_PATTERN_INTERRUPTED = 110,
    PHOTO_PATTERN_SHIFTED = 111,
    PHOTO_PATTERN_DIFFERENT_COLORS = 112,
    PHOTO_PATTERN_IR_VISIBLE = 113,
    PHOTO_PATTERN_NOT_INTERSECT = 114,
    PHOTO_SIZE_IS_WRONG = 115,
    PHOTO_PATTERN_INVALID_COLOR = 116,
    PHOTO_PATTERN_SHIFTED_VERT = 117,
    PHOTO_PATTERN_PATTERN_NOT_FOUND = 118,
    PHOTO_PATTERN_DIFFERENT_LINES_THICKNESS = 119,
    PHOTO_IS_NOT_RECTANGLE = 120,
    PHOTO_CORNERS_IS_WRONG = 121,
    TEXT_COLOR_SHOULD_BE_BLUE = 130,
    TEXT_COLOR_SHOULD_BE_GREEN = 131,
    TEXT_COLOR_SHOULD_BE_RED = 132,
    TEXT_SHOULD_BE_BLACK = 133,
    BARCODE_WAS_READ_WITH_ERRORS = 140,
    BARCODE_DATA_FORMAT_ERROR = 141,
    BARCODE_SIZE_PARAMS_ERROR = 142,
    NOT_ALL_BARCODES_READ = 143,
    PORTRAIT_COMPARISON_PORTRAITS_DIFFER = 150,
    PORTRAIT_COMPARISON_NO_SERVICE_REPLY = 151,
    PORTRAIT_COMPARISON_SERVICE_ERROR = 152,
    PORTRAIT_COMPARISON_NOT_ENOUGH_IMAGES = 153,
    PORTRAIT_COMPARISON_NO_LIVE_PHOTO = 154,
    PORTRAIT_COMPARISON_NO_SERVICE_LICENSE = 155,
    PORTRAIT_COMPARISON_NO_PORTRAIT_DETECTED = 156,
    FIELD_POS_CORRECTOR_PHOTO_REPLACED = 82,
    WRONG_MRZ_DPI = 200,
    WRONG_BACKGROUND = 201,
    LAST_DIAGNOSE_VALUE = 210
}



