const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const mutation = require("./mutations");

const query = require("./types/root_query_types");

module.exports = new GraphQLSchema({
  query,
  mutation
});
