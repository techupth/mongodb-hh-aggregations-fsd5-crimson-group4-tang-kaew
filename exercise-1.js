// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      sumTotal_price: { $sum: "$total_price" },
    },
  },
]);
