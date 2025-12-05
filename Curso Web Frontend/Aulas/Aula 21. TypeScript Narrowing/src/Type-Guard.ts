const zipCodeMask = (value: string | number): string => {
  //Type Guard
  if (typeof value === "number") {
    value = value.toString();
  }

  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};

const zipCode1 = zipCodeMask("10000001");
console.log(zipCode1); //10000-001

const zipCode2 = zipCodeMask(10000002);
console.log(zipCode2); //10000-002
