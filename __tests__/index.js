import assert from 'assert';
import { configure, mount } from 'enzyme'
import InfernoEnzymeAdapter from 'enzyme-adapter-inferno'

import InfernoAce from '../index';
import brace from '../mocks/brace';

configure({ adapter: new InfernoEnzymeAdapter() })

const COMPONENT_ID = 'inferno-ace-editor';

test('renders the component with correct class and element type', () => {
  const wrapper = mount(<InfernoAce />);

  assert.equal(wrapper.find(`#${COMPONENT_ID}`).prop('id'), COMPONENT_ID);
});

test('initialises the code editor on the correct element', () => {
  const wrapper = mount(<InfernoAce />);
  const braceEditCall = brace.edit.mock.calls;

  assert.equal(braceEditCall.length, 1);
  assert.equal(braceEditCall[0][0], COMPONENT_ID);
});

test('initialises the code editor with the correct mode', () => {
  const wrapper = mount(<InfernoAce />);
  const mode = 'ace/mode/javascript';
  const setModeCall = brace.getSession().setMode.mock.calls;

  console.log(setModeCall);
});
