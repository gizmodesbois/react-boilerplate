/* eslint no-underscore-dangle: off */

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({ uri: '<API_URL>' });

const middlewareLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('<TOKEN_KEY>');
    const authorizationHeader = token ? `Bearer ${token}` : null;
    operation.setContext({
        headers: {
            authorization: authorizationHeader,
        },
    });
    return forward(operation);
});

const httpLinkWithAuthToken = middlewareLink.concat(httpLink);

const client = new ApolloClient({
    link: httpLinkWithAuthToken,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export default client;
