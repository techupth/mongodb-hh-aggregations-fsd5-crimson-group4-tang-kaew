// Paste the complete MQL here
db.getCollection("pizzaOrders").aggregate([
  {
    $match: {
      $expr: {
        $and: [
          { $eq: [{ $year: { $toDate: "$created_at" } }, 2021] }, // กรองเฉพาะปี 2021
          { $eq: [{ $month: { $toDate: "$created_at" } }, 7] }, // กรองเฉพาะเดือน 7
        ],
      },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: { $toDate: "$created_at" } },
        month: { $month: { $toDate: "$created_at" } },
      },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
]);
