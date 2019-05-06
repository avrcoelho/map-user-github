/* types - inicio */

export const Types = {
  // nome do reducer/ação quequer realizar
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILUED: 'devs/ADD_FAILUED',
  MODAL: 'devs/MODAL',
};

/* types - fim */

/* Reducers - inicio */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  showModal: false,
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
        showModal: false,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILUED:
      return { ...state, loading: false, error: action.payload.error };
    case Types.MODAL:
      return { ...state, showModal: action.payload.showHide };
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
  addDevRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
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
  modal: showHide => ({
    type: Types.MODAL,
    payload: { showHide },
  }),
};
/* actions - fim */
