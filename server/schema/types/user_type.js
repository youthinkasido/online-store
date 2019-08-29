const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
} = graphql;

const mongoose = require("mongoose");
const User = mongoose.model("users");

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        loggedIn: { type: GraphQLBoolean },
        token: { type: GraphQLString }
    })
})

module.exports = UserType;