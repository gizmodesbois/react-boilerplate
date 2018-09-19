import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import client from './config/apollo_client';
import store from './store';

import Root from './root';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Component />
                </Provider>
            </ApolloProvider>
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./root', () => {
        const newApp = require('./root').default;
        render(newApp);
    });
}
