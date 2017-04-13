import React, { Component, PropTypes } from 'react';
import { fromJS } from 'immutable';
import { Button } from 'react-toolbox/lib/button';
import ToolbarPluginFormControl from './ToolbarPluginFormControl';
import styles from './ToolbarPluginForm.css';

export default class ToolbarPluginForm extends Component {
  static propTypes = {
    onPlugin: PropTypes.func.isRequired,
    onAddAsset: PropTypes.func.isRequired,
    onRemoveAsset: PropTypes.func.isRequired,
    getAsset: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      openPlugin: null,
      pluginData: fromJS({}),
    };
  }

  handlePlugin(plugin) {
    return (e) => {
      e.preventDefault();
      this.setState({ openPlugin: plugin, pluginData: fromJS({}) });
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { openPlugin, pluginData } = this.state;
    this.props.onPlugin(openPlugin, pluginData);
    this.setState({ openPlugin: null });
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({ openPlugin: null });
  };

  render() {
    return (
      <form className={styles.pluginForm} onSubmit={this.handleSubmit}>
        <h3 className={styles.header}>Insert {plugin.get('label')}</h3>
        <div className={styles.body}>
          {plugin.get('fields').map(field => (
            <ToolbarPluginFormControl { field, pluginData, onAddAsset, onRemoveAsset, getAsset }/>
          ))}
        </div>
        <div className={styles.footer}>
          <Button onClick={this.handleSubmit} raised>Insert</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}
