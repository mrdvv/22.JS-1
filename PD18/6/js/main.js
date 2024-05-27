const workers = [
  { name: "Jonas", lastname: "Jonaitis", salary: 4000 },
  { name: "Petras", lastname: "Petraitis", salary: 6000 },
  { name: "Valerijus", lastname: "Valerijonas", salary: 4500 },
  { name: "Deividas", lastname: "Deividaitis", salary: 7000 }
];

function getWorkersWithSalaryGreaterThan(amount) {
  return workers.filter(worker => worker.salary > amount);
}

const salaryAmount = 5000;
const workersWithHigherSalary = getWorkersWithSalaryGreaterThan(salaryAmount);
console.log(workersWithHigherSalary);