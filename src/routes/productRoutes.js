//MongoDB Aggregation Framework
//Pipeline=>[OP1,OP2,OP3,...,...]

//Kindly refer to productModel.js for better understanding of a Model
const router = require('express').Router();
const Product = require('../models/productsModel');

//aggregation pipeline:  $group pipeline operator
// Example output for group operaator
// {
//   "status": "success",
//   "data": {
//     "numberOfDocuments": 20,
//     "data": [
//       {
//         "_id": 279.99,
//         "sumPrice": 279.99,
//         "noOfSales": 900,
//         "count": 1
//       },
//       {
//         "_id": 599.99,
//         "sumPrice": 599.99,
//         "noOfSales": 450,
//         "count": 1
//       },
//     }
//   ]
// }
router.get('/group', async (req, res) => {
  try {
    //Write a code here for group operator
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// aggregation pipeline:  $match pipeline operator
//Example output for match operator
// {
//   "status": "success",
//   "data": {
//     "numberOfDocuments": 5,
//     "data": [
//       {
//         "_id": "640ed356fc72f25f0c02906b",
//         "metrics": {
//           "totalWishlists": 300,
//           "totalQuantitySold": 1250,
//           "totalReviews": 60,
//           "avgRating": 4.9
//         },
//         "tags": [
//           "smart",
//           "innovative",
//           "wireless",
//           "efficient",
//           "sleek",
//           "intuitive",
//           "cutting-edge"
//         ],
//         "name": "Z550",
//         "price": 399.99,
//         "__v": 0
//       },
//     }
//   ]
// }
router.get('/match', async (req, res) => {
  try {
    //Write a code here for match operator
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
