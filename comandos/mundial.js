// const funcionDia = () => {
//   let today = new Date();
//   let months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
//   let suffix = [`st`, `nd`, `rd`];
//   return `${today.getDate()}${suffix[today.getDate()] || `th`} of ${months[today.getMonth()]}`;
// }
const funcionDia = () => {
  let fechaHoy = Date.now();
  let hoy = new Date(fechaHoy).getTime();
  let qatar = new Date('Nov 21 2022').getTime();
  let diff = qatar - hoy;
  // fecha = fecha.toISOString();
  return `Faltan ${Math.ceil(diff / (1000 * 60 * 60 * 24))} dias para Qatar 2022!!!!`
}
module.exports = {
  funcionDia,
}