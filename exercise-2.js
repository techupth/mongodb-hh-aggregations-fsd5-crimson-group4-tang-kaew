// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  {
    $sort: {
      _id: -1, // Sorting by _id (size) in descending order
    },
  },
]);
