// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: {
        month: { $month: "$created_at" },
        year: { $year: "$created_at" },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      "_id.year": -1,
      "_id.month": -1,
    },
  },
]);
