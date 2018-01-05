import assert from 'assert';
import { configure, mount } from 'enzyme';
import InfernoEnzymeAdapter from 'enzyme-adapter-inferno';

import InfernoAce from '../index';
import brace from '../mocks/brace';

configure({ adapter: new InfernoEnzymeAdapter() });

const COMPONENT_ID = 'inferno-ace-editor';

describe('Inferno Ace', function () {

  afterEach(() => jest.clearAllMocks());

  test('renders the component with correct class and element type', () => {
    const wrapper = mount(<InfernoAce />);

    assert.strictEqual(wrapper.find(`#${COMPONENT_ID}`).prop('id'), COMPONENT_ID);
  });

  test('initialises the code editor on the correct element', () => {
    const wrapper = mount(<InfernoAce />);

    expect(brace.edit).toBeCalledWith(COMPONENT_ID);
  });

  test('initialises the code editor with the correct theme', () => {
    const wrapper = mount(<InfernoAce />);

    expect(brace.edit().setTheme).toBeCalledWith('ace/theme/github');
  });

  describe('Events', function () {

    function getEvent(eventName) {
      const onMockCalls = brace.edit().on.mock.calls;
      return onMockCalls.find((mockCall) => mockCall[0] === eventName);
    }

    function assertEventCall(eventName, mock) {
      const eventCall = getEvent(eventName);
      const eventData = {
        foo: 'bar'
      };

      expect(eventCall[0]).toEqual(eventName);
      expect(mock).not.toHaveBeenCalled();
      eventCall[1](eventData);
      expect(mock).toBeCalledWith(expect.objectContaining(eventData));
    }

    test('proxies event data with current value of text editor so we have access', () => {
      const onInputMock = jest.fn();
      const inputText = 'this is my input text';
      const wrapper = mount(<InfernoAce onInput={onInputMock} />);
      const eventData = {
        foo: 'bar'
      };

      brace.edit().getValue.mockReturnValue(inputText);

      const eventCall = getEvent('input');
      eventCall[1](eventData);

      expect(onInputMock).toHaveBeenCalledWith(Object.assign({}, eventData, { inputValue: inputText }));
    });

    test('initialises the code editor with correct onInput bound', () => {
      const onInputMock = jest.fn();
      const wrapper = mount(<InfernoAce onInput={onInputMock} />);

      assertEventCall('input', onInputMock);
    });

    test('initialises the code editor with correct onChange bound', () => {
      const onChangeMock = jest.fn();
      const wrapper = mount(<InfernoAce onChange={onChangeMock} />);

      assertEventCall('change', onChangeMock);
    });

  });

});
