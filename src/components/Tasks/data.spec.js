import {
  fakeTasks,
  fetchData,
  deleteTask,
  addTask,
  prepareData,
  generateFakeData
} from "./data";

describe("task helpers", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("checks prepareData", async () => {
    expect(prepareData()).toEqual([]);
    const fakeData = generateFakeData();
    expect(prepareData(fakeData).flat()).toEqual(fakeData);
  });
  it("fetchData with mocked valid response", async () => {
    fetch.mockResponseOnce(JSON.stringify(fakeTasks));
    const mockedSetter = jest.fn();
    await fetchData(mockedSetter);
    expect(mockedSetter).toHaveBeenCalledWith(fakeTasks);
  });
  it("fetchData with mocked error code", async () => {
    const tasks = JSON.stringify(fakeTasks);
    fetch.mockResponseOnce(tasks, { status: 404, ok: false });
    const mockedSetter = jest.fn();
    const mockedFailer = jest.fn();
    await fetchData(mockedSetter, mockedFailer);
    expect(mockedSetter).not.toHaveBeenCalled();
    expect(mockedFailer).toHaveBeenCalledWith();
  });
  it("[deleteTask] attempts to delete tasks", async () => {
    fetch.mockResponse(JSON.stringify(fakeTasks));

    await deleteTask(undefined, a => a);
    let [url, options] = fetch.mock.calls[0];
    expect(url).toContain("tasks/-1");
    expect(options).toHaveProperty("method", "DELETE");

    await deleteTask(9, a => a);
    [url, options] = fetch.mock.calls[1];
    expect(url).toContain("tasks/9");
    expect(options).toHaveProperty("method", "DELETE");
  });
  it("[addTask] attempts to add tasks", async () => {
    fetch.mockResponse(JSON.stringify(fakeTasks));
    await addTask(a => a);
    [url, options] = fetch.mock.calls[0];
    expect(options).toHaveProperty("method", "POST");
  });
});
