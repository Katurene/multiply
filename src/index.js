module.exports = function multiply(first, second) {

  let res = +(first * second);

  return BigInt(res).toString();
}
