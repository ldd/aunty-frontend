import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import AddTasks, { Form, Field, Control } from "./AddTasks";
import * as data from "./data";

describe("addTasks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetch.resetMocks();
  });

  it("renders snapshot", () => {
    const component = renderer.create(<AddTasks />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should submit an empty form with no errors", () => {
    const wrapper = shallow(<AddTasks />);
    wrapper
      .find(Form)
      .dive()
      .find(Control)
      .prop("onSubmit")();
  });
  it("should use onTaskAdded prop", async () => {
    const mockedAddTask = jest.fn();

    const wrapper = mount(<AddTasks onTaskAdded={mockedAddTask} />);
    wrapper
      .find("input")
      .forEach(node =>
        node.simulate("change", { target: { value: "someValue" } })
      );

    fetch.mockResponse(JSON.stringify(data.fakeTasks));
    await act(async () => await wrapper.find(Control).invoke("onSubmit")());
    expect(mockedAddTask).toHaveBeenCalledWith(data.fakeTasks);

    const [, options] = fetch.mock.calls[0];
    expect(options.body).toContain("someValue");
  });

  it("should call addTask helper function", async () => {
    const mockedAddTask = jest.fn();
    jest.spyOn(data, "addTask").mockImplementation(mockedAddTask);

    const wrapper = mount(<AddTasks onTaskAdded={mockedAddTask} />);
    wrapper
      .find("input")
      .forEach(node =>
        node.simulate("change", { target: { value: "someValue" } })
      );

    await act(async () => await wrapper.find(Control).invoke("onSubmit")());
    expect(mockedAddTask).toHaveBeenCalled();
  });
});
