//category, weight, description, name, user
import Queries from "../../graphql/queries";
import { Query } from "react-apollo";
import React, { Component } from "react";
import { withRouter } from "react-router";
const { FETCH_PRODUCT } = Queries

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
        <Query
          query={FETCH_PRODUCT}
          variables={{ id: this.props.match.params.id }}
         
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return (
              <div>
                <div>Name: {data.product.name}</div>
                <div>Description: {data.product.description}</div>
                <div>Weight: {data.product.weight}</div>
              </div>
            );
          }}
        </Query>
    );
  }
}

export default withRouter(ProductDetail);
