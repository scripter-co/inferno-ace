export default {
  edit: jest.fn().mockReturnValue({
    getSession: jest.fn(),
    setTheme: jest.fn(),
    on: jest.fn(),
    getValue: jest.fn(),
    setFontSize: jest.fn()
  })
};
