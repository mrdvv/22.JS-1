const a = 54;
const b = [...a.toString()];

if (b[0] > b[1]) {
    console.log("First is bigger");
} else if (b[0] < b[1]) {
    console.log("Second is bigger");
} else {
    console.log("Both are equal");
}