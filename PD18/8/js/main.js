function compareObjects(obj1, obj2) {
    const properties1 = Object.keys(obj1);
    const properties2 = Object.keys(obj2);
  
    if (properties1.length !== properties2.length) {
      return false;
    }
  
    for (let property of properties1) {
      if (obj1[property] !== obj2[property]) {
        return false;
      }
    }
  
    return true;
  }
  
  const object1 = {
    name: "Jonas",
    age: 30,
    address: "Ozo g. 12"
  };
  
  const object2 = {
    name: "Jonas",
    age: 30,
    address: "Ozo g. 12"
  };
  
  const object3 = {
    name: "Petras",
    age: 25,
    address: "Ozo g. 13"
  };
  
  console.log(compareObjects(object1, object2)); // Output: true
  console.log(compareObjects(object1, object3)); // Output: false