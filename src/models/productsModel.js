/* Product Model */
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  metrics: {
    totalWishlists: {
      type: Number,
      required: true,
      default: 0,
    },
    totalQuantitySold: {
      type: Number,
      required: true,
      default: 0,
    },
    totalReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    avgRating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
