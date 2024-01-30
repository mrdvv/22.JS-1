function printElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
  }
}
