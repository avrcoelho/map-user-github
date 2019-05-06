import React from 'react';

import { Container } from './styles';
import icon from '../icon.png';

const ListDevs = () => (
  <Container>
    <div className="item">
      <img src={icon} alt="Imgem do usuário" />
      <div className="info-dev">
        <strong>André</strong>
        <span>avrcoelho</span>
      </div>
      <div className="icons">
        <i className="fa fa-times-circle" />
        <i className="fa fa-chevron-right" />
      </div>
    </div>
  </Container>
);

export default ListDevs;
