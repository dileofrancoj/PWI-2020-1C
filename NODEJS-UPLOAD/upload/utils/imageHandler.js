const fs = require("fs"); // file system
const uuid = require("node-uuid"); // generar strings únicos
const saveImage = (file) => {
  const extensionAllow = ["jpeg", "png"];
  let fileNameResult = "";
  const { mimetype, filename } = file; // image/jpeg
  const extension = mimetype.split("/")[1]; // -> ['image', 'jpeg']
  if (extensionAllow.includes(extension)) {
    // Extens -> exten allow
    const uid = uuid();
    const fileNameTmp = `./public/tmp/${filename}`;
    fileNameResult = `${uid}.${extension}`; // stringUnico.extensionMIME ANISDASD-noad123123-asdnausdas.png
    const fileNameOut = `./public/images/${fileNameResult}`;
    fs.createReadStream(fileNameTmp).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(fileNameTmp, (error) => console.log(error)); // borra el archivo temporal
    return fileNameResult;
  }
};

module.exports = {
  saveImage,
};
