const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
// const CategoryType = require("./category_type");
const Product = mongoose.model("products");

const ProductType = new GraphQLObjectType({
  name: "ProductType",

  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt },
    category: {
      type: require("./category_type"),
      resolve(parentValue) {
        return Product.findById(parentValue._id)
          .populate("category")
          .then(product => {
            console.log(product);
            return product.category;
          });
      }
    }
  })
});

module.exports = ProductType;

// abode: {
//     type: AbodeType,
//         resolve(parentValue) {
//         return Abode.findById(parentValue.abode)
//             .then(abode => abode)
//             .catch(err => null);
//     }
// },
// emblems: {
//     type: new GraphQLList(EmblemType),
//         resolve(parentValue) {
//         return God.findById(parentValue.id)
//             .populate("emblems")
//             .then(god => god.emblems);
//     }
// },
//     CategorySchema.statics.returnProductsOfCategory = function (categoryId) {
//         return this.findById(categoryId)
//             .populate("products")
//             .then(category => category.product);
