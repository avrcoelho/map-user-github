import React, { Fragment } from 'react';

import ListDevs from '../../components/listDevs';
import ModalAddDev from '../../components/modalAddDev';
import Map from '../../components/map';

const Main = () => (
  <Fragment>
    <ListDevs />
    <ModalAddDev />
    <Map />
  </Fragment>
);

export default Main;
