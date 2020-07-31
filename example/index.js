import * as fs from 'fs';

import {
  DocumentReaderApi,
  Result,
  Scenario,
  Source,
  TextFieldType,
  GraphicFieldType
} from '@regulaforensics/document-reader-client/esm';

const {PORTRAIT} = GraphicFieldType;
const {DOCUMENT_NUMBER} = TextFieldType;


(async () => {
  let apiBasePath = process.env.API_BASE_PATH || "http://localhost:8080"
  const license = process.env.TEST_LICENSE  // optional, used here only for smoke test purposes

  const api = new DocumentReaderApi({basePath: apiBasePath});
  api.setLicense(license) // used here only for smoke test purposes, most of clients will attach license on server side

  const raw_image = fs.readFileSync('australia_passport.jpg').buffer

  const response = await api.process({
    images: [raw_image],
    processParam: {
      scenario: Scenario.FULL_PROCESS,
      resultTypeOutput: [Result.RAW_IMAGE, Result.STATUS, Result.TEXT, Result.IMAGES]
    }
  })

  const docOverallStatus = response.status.overallStatus;
  const docOpticalTextStatus = response.status.detailsOptical.text;

  // text fields example
  const docNumberField = response.text.getField(DOCUMENT_NUMBER);
  const docNumberVisual = docNumberField.getValue(Source.VISUAL)
  const docNumberMrz = docNumberField.getValue(Source.MRZ)
  const docNumberVisualValidity = docNumberField.sourceValidity(Source.VISUAL)
  const docNumberMrzValidity = docNumberField.sourceValidity(Source.MRZ)
  const docNumberMrzVisualMatching = docNumberField.crossSourceComparison(Source.MRZ, Source.VISUAL)

  // images example
  const normalizedInputImage = response.images.getNormalizedInputImage()
  const portraitField = response.images.getField(PORTRAIT)
  const portraitFromVisual = portraitField.getValue(Source.VISUAL)
  fs.appendFileSync('portraitFromVisual.jpg', Buffer.from(portraitFromVisual));
  fs.appendFileSync('normalizedInputImage.jpg', Buffer.from(normalizedInputImage));

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

