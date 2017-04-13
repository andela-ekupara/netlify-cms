import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import { resolveWidget } from '../../Widgets';
import styles from './ToolbarPluginFormControl.css';

const ToolbarPluginFormControl = (props) => {
  const { field, onAddAsset, onRemoveAsset, getAsset, pluginData } = props;
  const Control = resolveWidget(field.get('widget') || 'string').control;
  const value = pluginData.get(field.get('name'));
  const key = `field-${ field.get('name') }`;

  return (
    <div className={styles.control} key={key}>
      <label className={styles.label} htmlFor={key}>{field.get('label')}</label>
      <Control
        value={value}
        onChange={(val) => { this.setState({ pluginData: pluginData.set(field.get('name'), val) }); }}
        {...props}
      />
    </div>
  );
};

ToolbarPluginFormControl.propTypes = {
  field: PropTypes.instanceOf(Map).isRequired,
  onAddAsset: PropTypes.func.isRequired,
  onRemoveAsset: PropTypes.func.isRequired,
  getAsset: PropTypes.func.isRequired,
  pluginData: PropTypes.instanceOf(Map).isRequired,
};

export default ToolbarPluginFormControl;
