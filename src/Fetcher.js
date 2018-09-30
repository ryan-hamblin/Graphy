import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

const data = client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

const Fetcher = () => {
  return (
    <ApolloProvider client={data}>
      <div>
        <h2> The Graphiest </h2>
      </div>
    </ApolloProvider>
  );
};

export default Fetcher;
