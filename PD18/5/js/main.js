function filterObject(obj) {
  const filteredObj = {};

  for (const key in obj) {
    if (obj[key] > 10) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

const originalObject = {
  name: "Jonas",
  age: 9,
  height: 150,
  weight: 40,
};

const filteredObject = filterObject(originalObject);
console.log(filteredObject);