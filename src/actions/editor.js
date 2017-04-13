import history from '../routing/history';

export const OPEN_PLUGIN_FORM = 'OPEN_PLUGIN_FORM';
export const CLOSE_PLUGIN_FORM = 'CLOSE_PLUGIN_FORM';
export const SWITCH_VISUAL_MODE = 'SWITCH_VISUAL_MODE';
export const CLOSED_ENTRY = 'CLOSED_ENTRY';

export const openPluginForm = plugin => ({ type: OPEN_PLUGIN_FORM, payload: { plugin } });
export const closePluginForm = () => ({ type: CLOSE_PLUGIN_FORM });

export function closeEntry(collection) {
  return (dispatch) => {
    if (collection && collection.get('name', false)) {
      history.push(`collections/${ collection.get('name') }`);
    } else {
      history.goBack();
    }
    dispatch({ type: CLOSED_ENTRY });
  };
}
