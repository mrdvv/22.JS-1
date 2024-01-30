
const n = 2; // seimos nariai
const t = 3000; // pirma alga
const m = 2000; // antra alga
const s = 4000; // mimimali alga
const k = 1000; // likutis apmoketi

const totalIncome = t + m;
const remainingPayment = k;

if (totalIncome >= s && remainingPayment > 0) {
    console.log("Bankas suteiks paskola");
} else {
    console.log("bankas nesuteiks paskolos");
}
