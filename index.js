import Component from 'inferno-component';
import brace from 'brace';

// import 'brace/mode/javascript';
// import 'brace/theme/github';

class InfernoAce extends Component {

  componentDidMount() {
    this.editor = brace.edit('inferno-ace-editor');
    console.log('editor', this.editor);
    // this.editor.getSession().setMode('ace/mode/javascript');
    // this.editor.setTheme('ace/theme/github');
    // this.editor.on('input', this.props.onInput);
  }

  render() {
    return (
      <div id="inferno-ace-editor" />
    );
  }

}

InfernoAce.defaultProps = {
  onInput: () => null
}

export default InfernoAce;
