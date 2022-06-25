module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let reverseString = str.split("").reverse().join("")
  return Number(reverseString)
}
