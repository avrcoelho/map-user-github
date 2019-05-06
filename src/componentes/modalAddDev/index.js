import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DevActions } from '../../stores/ducks/devs';

import { Modal } from './styles';

class ModalAddDev extends Component {
  //  não utiliza o state do redux para informação de campos de formuçarios
  // a mesno que o campo do form seja controlado pelo o redux
  state = {
    devInput: '',
  };

  handleAddDev = e => {
    e.preventDefault();

    this.props.addDevRequest(this.state.devInput);

    this.setState({ devInput: '' });
  };

  handleHideModal = () => {
    this.props.modal(false);
  };

  render() {
    return (
      <Modal show={this.props.showHideModal}>
        <div className="modal">
          <h2>Adicionar usuário</h2>
          <form>
            <input
              type="text"
              placeholder="Usuário do Github"
              value={this.state.devInput}
              onChange={e => this.setState({ devInput: e.target.value })}
            />
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
  showHideModal: state.devs.showModal,
});

const mapDispatchToProps = dispatch => bindActionCreators(DevActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddDev);
