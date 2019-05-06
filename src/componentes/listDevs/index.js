import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DevActions } from '../../stores/ducks/devs';


import { Container } from './styles';

class ListDevs extends Component {
  handleRemoveDev = id  => {
    this.props.removeDev(id);
  }

  render() {
    return (
      <Container>
        {this.props.devs && this.props.devs.map(dev => (
          <div key={dev.id} className="item">
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="info-dev">
              <strong>{dev.name}</strong>
              <span>{dev.login}</span>
            </div>
            <div className="icons">
              <i className="fa fa-times-circle" onClick={() => this.handleRemoveDev(dev.id)} />
              <a href={dev.html_url} target="_blank"  rel="noopener noreferrer"><i className="fa fa-chevron-right" /></a>
            </div>
          </div>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // faça a logica aqui, caso não tenha conseguido fazer dentro do redux
  // não faça lógica no render
  devs: state.devs.devs,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDevs);
