# Regula Document Reader js client for the browser and node.js example


:bulb: Before you start: if you just want to play with an online demo, visit our [playground](https://api.regulaforensics.com).

Requirements:
- installed nodejs 12 or higher
- installed npm 6 or higher

Verify **Node.js** and **npm** version:
```bash
node --version  
> v12.18.3
npm --version
> 6.14.6
```

Cloning example:
```bash
git clone https://github.com/regulaforensics/DocumentReader-web-js-client.git
cd DocumentReader-web-js-client
```

Setup project and download dependencies:
```bash
npm install
npm run build
cd example
npm install
```

### Running with local Regula Document Reader web API installation

Follow [the instructions](https://docs.regulaforensics.com/web/quick-start-guide) to run Regula Document Reader web API. 
Assuming you have successfully launched instance, use next line command to run example:
```bash
# from example folder
node .

# If Regula Document Reader web API is running not on localhost, specify host via env variable:
API_BASE_PATH="http://192.168.0.101:8080" node .
```

### Running using Regula Document Reader web API test SaaS

Get your [free trial here](https://mobile.regulaforensics.com/). You should obtain `regula.license` file. 
Copy it to **example** folder. You are ready for running!

Execute example:
```bash
# from example folder
API_BASE_PATH="https://test-api.regulaforensics.com" node .
```

### Output 
This sample generates next text output:
```text
    ---------------------------------------------------------------------------
                   Document Overall Status: not valid
                    Document Number Visual: U0996738
                       Document Number MRZ: U0996738
        Validity Of Document Number Visual: 1
           Validity Of Document Number MRZ: 1
              MRZ-Visual values comparison: 1
    ---------------------------------------------------------------------------
```
Also, it creates [portrait](portrait.jpg) and [document image](document-image.jpg) pictures inside current folder.
Edit [example](./index.js) on your own , and re-run to see your results.
