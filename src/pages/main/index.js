import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as DevActions } from '../../stores/ducks/devs';

import 'mapbox-gl/dist/mapbox-gl.css';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 0,
      longitude: 0,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._handleGetLocation();
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  handleHideModal = () => {
    this.props.modal(true);
  };

  // verifica se se o navegador suporta geolocalização
  async _handleGetLocation() {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(this._handleShowPosition);
    }
  }

  // obtem a localização e seta no state
  _handleShowPosition = async ({ coords }) => {
    await this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    });
  };

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleHideModal}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={
          'pk.eyJ1IjoiYW5kcmV2cmNvZWxobyIsImEiOiJjanZiNWZ3bGkxamQ5NGFtZW9yOTU4ODY1In0.ISHC_i_ClZelfGb3KF_RCA'
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick={true}
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            alt="teste"
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          />
        </Marker>
      </MapGL>
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
)(Main);
