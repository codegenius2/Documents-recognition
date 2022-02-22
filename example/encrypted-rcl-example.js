import * as fs from 'fs';

import {
    DocumentReaderApi,
    Result,
    Scenario,
    Source,
    TextFieldType,
    GraphicFieldType,
    Light,
    SecurityFeatureType
} from '@regulaforensics/document-reader-webclient/esm';

const {PORTRAIT, DOCUMENT_FRONT} = GraphicFieldType;
const {DOCUMENT_NUMBER} = TextFieldType;


(async () => {
    let apiBasePath = process.env.API_BASE_PATH || "https://api.regulaforensics.com"
    let license = process.env.TEST_LICENSE  // optional, used here only for smoke test purposes
    if (fs.existsSync('regula.license')) license = fs.readFileSync('regula.license')

    const api = new DocumentReaderApi({basePath: apiBasePath});
    api.setLicense(license)

    const serverInfo = await api.ping()

    const license_file = fs.readFileSync('license.txt', 'utf8')
    const encrypted_rcl = fs.readFileSync('encrypted-rcl.txt', 'utf8')

    const response = await api.process({
        ContainerList: {
            Count: 2,
            List: [
                {License: license_file, light: 0, page_idx: 0, buf_length: 1372, list_idx:0, result_type: 50},
                {EncryptedRCL: encrypted_rcl, light: 0, page_idx: 0, buf_length: 453276, list_idx:0, result_type: 49}
            ]
        },
        processParam: {
            scenario: Scenario.FULL_AUTH,
            doublePageSpread: true,
            measureSystem: 0,
            dateFormat: "M/d/yyyy",
            alreadyCropped: true
        }
    })

    const docOverallStatus = response.status.overallStatus;
    const docOpticalTextStatus = response.status.detailsOptical.text;

    // text fields example
    const docNumberField = response.text.getField(DOCUMENT_NUMBER);
    const docNumberFieldByName = response.text.getFieldByName("Document Number")

    const docNumberVisual = docNumberField.getValue(Source.VISUAL)
    const docNumberMrz = docNumberField.getValue(Source.MRZ)
    const docNumberVisualValidity = docNumberField.sourceValidity(Source.VISUAL)
    const docNumberMrzValidity = docNumberField.sourceValidity(Source.MRZ)
    const docNumberMrzVisualMatching = docNumberField.crossSourceComparison(Source.MRZ, Source.VISUAL)


    // images example
    const documentImage = response.images.getField(DOCUMENT_FRONT).getValue()
    const portraitField = response.images.getField(PORTRAIT)
    const portraitFromVisual = portraitField.getValue(Source.VISUAL)
    fs.appendFileSync('portrait.jpg', Buffer.from(portraitFromVisual));
    fs.appendFileSync('document-image.jpg', Buffer.from(documentImage));

    const docImageQuality = response.imageQualityChecks();

    console.log("-----------------------------------------------------------------")
    console.log(`            Web API version: ${serverInfo.version}`)
    console.log("-----------------------------------------------------------------")
    console.log(`           Document Overall Status: ${docOverallStatus}`)
    console.log(`            Document Number Visual: ${docNumberVisual}`)
    console.log(`               Document Number MRZ: ${docNumberMrz}`)
    console.log(`Validity Of Document Number Visual: ${docNumberVisualValidity}`)
    console.log(`   Validity Of Document Number MRZ: ${docNumberMrzValidity}`)
    console.log(`      MRZ-Visual values comparison: ${docNumberMrzVisualMatching}`)
    console.log("-----------------------------------------------------------------")


    // how to get low lvl individual results
    const lexResult = response.lowLvlResponse.resultByType(Result.LEXICAL_ANALYSIS)
})();

