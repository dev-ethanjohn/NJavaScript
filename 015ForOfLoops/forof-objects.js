const stockItem = {
  id: 54,
  price: 1.32,
  name: "Apple",
  quantity: 6,
};

for (const [key, value] of Object.entries(stockItem)) {
  console.log(`${key}: ${value}`);
}
