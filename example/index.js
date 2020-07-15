import * as fs from 'fs';

import {DocumentReaderApi, Scenario, Result, TextFieldType, Source} from '@regulaforensics/document-reader-client/esm';
const {DOCUMENT_NUMBER} = TextFieldType;


(async () => {
  const raw_image = fs.readFileSync('australia_passport.jpg').buffer
  const api = new DocumentReaderApi({basePath: "http://localhost:8080"});

  const response = await api.process({
    images: [raw_image],
    processParam: {
      scenario: Scenario.FULL_PROCESS,
      resultTypeOutput: [Result.TEXT, Result.LEXICAL_ANALYSIS]
    }
  })


  const docNumberField = response.text.getField(DOCUMENT_NUMBER);
  const docNumberVisual = docNumberField.getValue(Source.VISUAL)
  const docNumberMrz = docNumberField.getValue(Source.MRZ)
  const docNumberVisualValidity = docNumberField.sourceValidity(Source.VISUAL)
  const docNumberMrzValidity = docNumberField.sourceValidity(Source.MRZ)
  const docNumberMrzVisualMatching = docNumberField.crossSourceComparison(Source.MRZ, Source.VISUAL)

  console.log("-----------------------------------------------------------------")
  console.log(`            Document Number Visual: ${docNumberVisual}`)
  console.log(`               Document Number MRZ: ${docNumberMrz}`)
  console.log(`Validity Of Document Number Visual: ${docNumberVisualValidity}`)
  console.log(`   Validity Of Document Number MRZ: ${docNumberMrzValidity}`)
  console.log(`      MRZ-Visual values comparison: ${docNumberMrzVisualMatching}`)
  console.log("-----------------------------------------------------------------")


  // how to get low lvl individual results
  const lexResult = response.lowLvlResponse.resultByType(Result.LEXICAL_ANALYSIS)
})();

