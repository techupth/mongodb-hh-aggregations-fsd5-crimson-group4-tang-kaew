// Paste the complete MQL here
db.getCollection("pizzaOrders").aggregate(
  {
    $group: {
      _id: { $year: { $toDate: "$created_at" } },
      total_price_per_year: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      _id: -1,
    },
  }
);
