import Component from 'inferno-component';
import brace from 'brace';

import 'brace/theme/github';

class InfernoAce extends Component {

  proxyEventData(eventData) {
    return Object.assign({ inputValue: this.editor.getValue() }, eventData);
  }

  componentDidMount() {
    this.editor = brace.edit('inferno-ace-editor');
    this.editor.setTheme('ace/theme/github');
    this.editor.setFontSize(this.props.fontSize);
    this.editor.on('input', (eventData) => this.props.onInput(this.proxyEventData(eventData)));
    this.editor.on('change', (eventData) => this.props.onChange(this.proxyEventData(eventData)));
  }

  render() {
    return (
      <div id="inferno-ace-editor" />
    );
  }

}

InfernoAce.defaultProps = {
  onInput: () => {},
  onChange: () => {},
  fontSize: 12
};

export default InfernoAce;
