// Paste the complete MQL here
db.getCollection("pizzaOrders").aggregate([
  {
    $match: {
      $expr: { $eq: [{ $year: { $toDate: "$created_at" } }, 2021] }, // กรองเฉพาะปี 2021
    },
  },
  {
    $group: {
      _id: {
        month: { $month: { $toDate: "$created_at" } }, // กลุ่มแยกตามเดือน
        year: { $year: { $toDate: "$created_at" } }, // ให้ระบุปีด้วย
      },
      total_sales_by_month: { $sum: "$total_price" }, // หายอดขายรวมในแต่ละเดือน
    },
  },
  {
    $sort: { total_sales_by_month: 1 }, // เรียงลำดับตามยอดขายรวมจากน้อยไปมาก
  },
  {
    $limit: 1, // จำกัดผลลัพธ์ให้แสดงเฉพาะเดือนที่มียอดขายต่ำสุด 1 เดือน
  },
]);
