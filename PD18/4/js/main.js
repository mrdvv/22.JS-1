const human = {
    name: "Jonas",
    age: 32,
    occupation: "Programmer",
    address: "Ozo g. 12"
  };
  
  function printHumanFeatures() {
    for (const feature in human) {
      console.log(`${feature}: ${human[feature]}`);
    }
  }
  
  printHumanFeatures();