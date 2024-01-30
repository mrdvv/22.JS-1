
const envelopeWidth = 100; // mm
const envelopeHeight = 150; // mm
const postcardWidth = 80; // mm
const postcardHeight = 120; // mm

const availableWidth = envelopeWidth - 2;
const availableHeight = envelopeHeight - 2;

const willFit = postcardWidth <= availableWidth && postcardHeight <= availableHeight;

console.log(willFit); // taip arba ne
