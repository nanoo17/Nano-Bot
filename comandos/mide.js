const meMide = (message) => {
  let medida = Math.floor(Math.random() * (51 - 0)) + 0;
  return message.reply(`Te mide: ${medida}cm`);
}
module.exports = {
  meMide,
}