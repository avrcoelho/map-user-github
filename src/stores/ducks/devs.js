/* types - inicio */

export const Types = {
  // nome do reducer/ação quequer realizar
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILUED: 'devs/ADD_FAILUED',
  REMOVE_DEV: 'devs/REMOVE_DEV',
  MODAL: 'devs/MODAL',
};

/* types - fim */

/* Reducers - inicio */

const INITIAL_STATE = {
  loading: false,
  devs: [],
  error: null,
  dataModal: {
    showHide: false,
    latitude: '',
    longitude: '',
  },
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        dataModal: {
          showHide: false,
          latitude: '',
          longitude: '',
        },
        devs: [...state.devs, action.payload.data],
      };
    case Types.ADD_FAILUED:
      return { ...state, loading: false, error: action.payload.error };
    case Types.MODAL:
      return {
        ...state,
        error: null,
        dataModal: {
          showHide: action.payload.data.hideShowModal,
          latitude: action.payload.data.latitude,
          longitude: action.payload.data.longitude,
        },
      };
    case Types.REMOVE_DEV:
      return {
        ...state, devs: state.devs.filter(dev => dev.id !== action.payload.id),
      };
    default:
      return state;
  }
}

/* Reducers - fim */

/* Actions - inicio */

export const Creators = {
  // request que vai ser chamada
  // quem vai ouvir essa função vai er o saga, pois ela não esta completa para
  // ser enviada para o reducer
  addDevRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data },
  }),
  // recebe os dados do repositório e envia para o reducer
  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDevFailued: error => ({
    type: Types.ADD_FAILUED,
    payload: { error },
  }),
  removeDev: id => ({
    type: Types.REMOVE_DEV,
    payload: { id },
  }),
  modal: data => ({
    type: Types.MODAL,
    payload: { data },
  }),
};
/* actions - fim */
