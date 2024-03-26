/* When we fail a request in the tests it is automatically logged to
 * console.error. This is annoying and obfuscates the test output.
 * Provide hooks to be used with jest before / after to silence this.
 * beforeEach(suppressErrors);
 * afterEach(unSuppressErrors);
 */
const suppressErrors = () => {
  jest.spyOn(console, "error").mockImplementation(() => {
    return;
  });
};

const unSuppressErrors = () => {
  jest.spyOn(console, "error").mockRestore();
};

export { suppressErrors, unSuppressErrors };
