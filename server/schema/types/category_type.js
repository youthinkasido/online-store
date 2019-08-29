const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
// const ProductType = require("./product_type");
const CategoryType = new GraphQLObjectType({
  name: "CategoryType",
  // remember we wrap the fields in a thunk to avoid circular dependency issues
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    products: {
      type: new GraphQLList(require("./category_type")),
      resolve(parentValue) {
        return Category.returnProductsOfCategory(parentValue._id);
      }
    }
  })
});

module.exports = CategoryType;
