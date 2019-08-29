import { Link } from "react-router-dom";
import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";

const { FETCH_PRODUCTS } = Queries;

const ProductIndex = () => {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              
              <li key={product._id}>
                <Link to={`/products/${product._id}`}>{product.name}</Link>
                <div>{product.category}</div>
                <div>{product.description}</div>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default ProductIndex
