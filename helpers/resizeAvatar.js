const Jimp = require("jimp");

async function resize(img) {
  try {
    const image = await Jimp.read(img);
    await image.resize(100, 100);
    await image.writeAsync(img);
  } catch (error) {
    console.log(error);
  }
}

module.exports = resize;
