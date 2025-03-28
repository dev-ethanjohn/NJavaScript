const fs = require("fs-extra"); //commonJS

const file = "hello-text";
fs.outputFileSync(file, "Gello, from NODEJS!");
