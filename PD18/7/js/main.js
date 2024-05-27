function copyObject(obj) {
    return Object.assign({}, obj);
  }
  
  const originalObject = {
    name: "Jonas",
    age: 28,
    address: "Ozo g. 12"
  };
  
  const copiedObject = copyObject(originalObject);
  console.log(originalObject);
  
  copiedObject.age = 30;
  
  console.log(copiedObject);
  console.log(originalObject);