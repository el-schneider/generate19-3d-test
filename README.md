# Three Seed
Generate 2019 Three.js starter project bundled with Webpack.

## Live Example

[Here](http://g19.template.jonasschneider.de/)  you can find a live example of this project.

## Install
Before you begin, make sure you are comfortable with terminal commands and have [Node and NPM installed](https://www.npmjs.com/get-npm).

### Install via Download
First download the [zip of the project](https://github.com/el-schneider/generate19-3d-test/archive/master.zip) and extract it. Then in terminal at that folder type `npm install` to set things up. To get going run: `npm start`.

### Install with Git
In terminal clone the project into a directory of your choice then delete the git folder to start fresh.

```bash
git clone --depth=1 https://github.com/el-schneider/generate19-3d-test.git my-project
cd my-project
rm -rf .git
npm install
```

## Running the development server
To see the changes you make to the starter project go to the project folder in terminal and type...

```bash
npm start
```

This command will bundle the project code and start a development server at [http://localhost:8080/](http://localhost:8080/). Visit this in your web browser; every time you make changes to the code the page will refresh. Congratulations, you are good to go!

## Editing the code
The first file you should open is `./objects/Scene.js`. In it you will find the three objects comprising the world represented in your browser. The flower, the island, and the lights illuminating them are each represented as a javascript file in the `./object/s` folder. Open these, edit them and see your changes in the browser. If something goes wrong a message will displayed in the debug console of the browser.

## Building the project for the web
Once you are happy with your project you'll be sure to want to show it off. Running `npm run build` in terminal will bundle your project into the folder `./build/`. You can upload this directory to a web server. For more complex results read [this guide](https://webpack.js.org/guides/production/).



