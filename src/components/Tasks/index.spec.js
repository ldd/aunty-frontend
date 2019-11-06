import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import Tasks, { Task, Entry } from ".";
import * as data from "./data";

const { generateFakeData, fakeTasks } = data;
global.Math.random = () => 0.5;

describe("Heading", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetch.resetMocks();
    const mockedAddTask = jest.fn().mockImplementation(() => fakeTasks);
    jest.spyOn(data, "fetchData").mockImplementation(mockedAddTask);
  });

  it("renders snapshot [tasks]", () => {
    const component = renderer.create(<Tasks />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders snapshot [task]", () => {
    const component = renderer.create(<Task />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders snapshot [task with data]", () => {
    const component = renderer.create(<Task data={generateFakeData()} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders snapshot [entry]", () => {
    const component = renderer.create(<Entry />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders mounted tasks", async () => {
    fetch.mockResponse(JSON.stringify(fakeTasks), { ok: true });

    const wrapper = mount(<Tasks initialData={fakeTasks} />);
    const getTask = () => wrapper.find(Task).first();
    await act(async () => await getTask().prop("deleteTask")());

    const label = getTask().prop("label");
    const [url, options] = fetch.mock.calls[0];
    expect(url).toContain(label);
    expect(options).toHaveProperty("method", "DELETE");
  });
});
