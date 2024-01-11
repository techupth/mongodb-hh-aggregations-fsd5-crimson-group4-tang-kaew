db.getCollection("pizzaOrders").aggregate([
  {
    $group: {
      _id: {
        month: {
          $dateToString: { format: "%Y-%m", date: { $toDate: "$created_at" } },
        },
        year: {
          $dateToString: { format: "%Y", date: { $toDate: "$created_at" } },
        },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": -1,
    },
  },
]);
