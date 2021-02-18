const fileHandler = require('../fileHandler');
jest.useFakeTimers();
describe("handle files", () => {
  it("read csv file", async() => {
    let result = fileHandler.readCsv();
    setTimeout(() => {
      expect(result).toBe('Done');
    }, 5000)
  });
});
