const Jimp = require("jimp");

async function resize(img) {
  const image = await Jimp.read(img);
  await image.resize(100, 100);
  await image.writeAsync(img);
}

module.exports = resize;
