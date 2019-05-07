import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'

import { Creators as DevActions } from '../../stores/ducks/devs';

import { Modal } from './styles';

class ModalAddDev extends Component {
  //  não utiliza o state do redux para informação de campos de formuçarios
  // a mesno que o campo do form seja controlado pelo o redux
  state = {
    devInput: ''
  };

  handleAddDev = e => {
    e.preventDefault();

    this.props.addDevRequest(this.state.devInput);

    this.setState({ devInput: '' });
  };

  handleHideModal = () => {
    this.props.modal(false);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      devInput: this.state.devInput,
      latitude: this.props.dataModal.latitude,
      longitude: this.props.dataModal.longitude,
    }

    await this.props.addDevRequest(data);

    if(!!this.props.devs.error){
      this.setState({ devInput: '' }) 
    }
  }

  static propTypes = {
    addDevRequest: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([null, PropTypes.string]).isRequired, 
    dataModal: PropTypes.shape({
      showHide: PropTypes.bool
    }).isRequired
  }

  render() {
    return (
      <Modal show={this.props.dataModal.showHide}>
        <div className="modal">
          <h2>Adicionar usuário</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Usuário do Github"
              value={this.state.devInput}
              onChange={e => this.setState({ devInput: e.target.value })}
            />
            {!!this.props.devs.error && <span className="error">{this.props.devs.error}</span>}
            <div className="btn-container">
              <button type="button" onClick={this.handleHideModal} className="btn-cancel">
                Cancelar
              </button>
              <button type="submit" className="btn-save">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  // faça a logica aqui, caso não tenha conseguido fazer dentro do redux
  // não faça lógica no render
  dataModal: state.devs.dataModal,
  devs: state.devs,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddDev);
