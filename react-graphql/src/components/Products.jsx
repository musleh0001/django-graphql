import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Products = () => {
    return (
        <>
            <Query
                query={gql`
                    {
                        allProducts {
                            id
                            name
                            price
                            inStock
                            dateCreated
                            category {
                                id
                                name
                            }
                        }
                    }
                `}
            >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :( </p>;
                    return data.allProducts.map(
                        ({
                            id,
                            name,
                            price,
                            inStock,
                            dateCreated,
                            category,
                        }) => (
                            <div key={id}>
                                <p>
                                    Product Name: <b>{name}</b>
                                </p>
                                <p>Price: {price}</p>
                                <p>In Stock: {inStock ? "True" : "False"}</p>
                                <p>Category: {category.name}</p>
                                <p>Date Created: {dateCreated}</p>
                                <button onClick={() => console.log(id)}>
                                    Delete
                                </button>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        )
                    );
                }}
            </Query>
        </>
    );
};

export default Products;
