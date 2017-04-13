import { Map } from 'immutable';
import { OPEN_PLUGIN_FORM, CLOSE_PLUGIN_FORM } from '../actions/editor';

export const getOpenPlugin = state => state.get('openPlugin');

const defaultState = Map({
  openPlugin: null,
  pluginData: Map(),
});

export default editor = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_PLUGIN_FORM:
      return state.merge({ openPlugin: action.payload.plugin, pluginData: Map() });
    case CLOSE_PLUGIN_FORM:
      return state.set('openPlugin', null);
    default:
      return state;
  }
};
