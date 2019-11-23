const add = (a = 0, b = 0) => a + b;
const sub = (a = 0, b = 0) => a - b;
const mul = (a = 0, b = 1) => a * b;
const div = (a = 0, b = 1) => (a / b).toFixed(2);
const mod = (a = 0, b = 1) => a % b;
const age = dob => {
  const today = new Date();
  const dob_array = dob.split("/");
  const year = today.getFullYear() - parseInt(dob_array[2]);
  const month = today.getMonth() + 1 - parseInt(dob_array[1]);
  const date = today.getDate() - parseInt(dob_array[0]);
  const complete_age = `${year} years ${month} months ${date} days`;
  return year;
};

module.exports = { add, sub, mul, div, mod, age };
