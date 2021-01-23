// @ts-check

/** @type {SDWC.Preference} */
const state = {
  lang: '',
  mapType: 'sd-map-mapbox',
  mapFollow: true,
  overviewFit: true,
  notifyPopup: [],
  rpcMsgPopup: true,
  planDialogPopup: true
};

export const MutationTypes = {
  SET_PREFERENCE: 'SET_PREFERENCE'
};

/**
 * @type {{ [x: string]: (state: SDWC.Preference, payload: any) => void }}
 */
const mutations = {
  [MutationTypes.SET_PREFERENCE](state, /** @type {Partial<SDWC.Preference>} */ payload) {
    Object.assign(state, payload);
  }
};

export default {
  state,
  mutations
};
