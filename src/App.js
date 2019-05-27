import React, { Fragment } from "react";
import { Provider } from "react-redux";
// ele deve ser acima do store
import "./config/ReactotronConfig";
import store from "./stores";

import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

// console.tron.log('Testando');
// pv

const App = () => (
  // provider da acesso aos stores contidos na aplicação
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </Provider>
);
export default App;
