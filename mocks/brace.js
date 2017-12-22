const mocks = {
  edit: jest.fn(),
  setMode: jest.fn()
}

afterEach(() => {
  Object.keys(mocks).forEach((key) => mocks[key].mockReset());
});

const bla = {
  edit: mocks.edit,
  getSession: () => {
    return {
      setMode: mocks.setMode
    };
  }
}

bla.edit.mockImplementation({
  hello: 'a'
});

export default bla;
