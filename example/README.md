# Regula Document Reader js client for the browser and node.js example


:bulb: Before you start: if you just want to play with an online demo, visit our [playground](https://api.regulaforensics.com).

:warning: NOTE: If a custom Document Reader endpoint is not specified, demo web API will be used by default.
By sending requests to demo Regula Document Reader web API,
you agree with our [Privacy Policy](https://api.regulaforensics.com/terms)
and [License Agreement](https://downloads.regulaforensics.com/work/SDK/doc/Eula.pdf).

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

### Running the client with demo Regula Document Reader web API
Execute example:
```bash
# from example folder
node .
```

### Running with local Regula Document Reader web API installation

Get your [free trial here](https://mobile.regulaforensics.com/). When you receive the `regula.license` file,
copy it to the [example](../example) folder. Now you are ready for start!

Follow [the instructions](https://docs.regulaforensics.com/web-service/quick-start-guide) to run Regula Document Reader web API.
If the instance has been launched successfully, use the following line command to run the example:

```bash
# from example folder
API_BASE_PATH="http://127.0.0.1:8080" node .
```



### Output 
This sample generates the following text output:
```text
    ---------------------------------------------------------------------------
                   Document Overall Status: 0
                    Document Number Visual: OO0000000
                       Document Number MRZ: OO0000000
        Validity Of Document Number Visual: 0
           Validity Of Document Number MRZ: 0
              MRZ-Visual values comparison: 1
    ---------------------------------------------------------------------------
```
Also, it stores [portrait](portrait.jpg) and [document image](document-image.jpg) images in the current folder.
You can modify [this example](../example/index.js)
and re-run it to get your own results.
