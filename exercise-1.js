// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      total_price: { $sum: "$total_price" },
    },
  },
  {
    $sort: { total_price: 1 }, // This is option for sorting ascending/ descending
  },
]);
