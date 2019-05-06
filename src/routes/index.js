import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Main from '../pages/main';

// components
import ListDevs from '../componentes/listDevs';
import ModalAddDev from '../componentes/modalAddDev';

const Routes = () => (
  // BrowserRouter: dis que as aplicação vão rodar no browser para saber controlar a URL
  <BrowserRouter>
    {/* o BrowserRouter só pode ter um filho, por isso colocamos o Fragment  */}
    <Fragment>
      <ModalAddDev />
      <ListDevs />
      {/* Switch: evita duas rotas serem chamadas ao mesmo tempo
    para de executar o route quando encontra a primeira rota com o path */}
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
