const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },

  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products"
    }
  ]
});

CategorySchema.statics.returnProductsOfCategory = function(categoryId) {
  return this.findById(categoryId)
    .populate("products")
    .then(category => category.product);
};

module.exports = mongoose.model("categories", CategorySchema);
