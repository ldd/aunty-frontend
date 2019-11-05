import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Heading from "./Heading";

describe("Heading", () => {
  it("renders snapshot [empty]", () => {
    const component = renderer.create(<Heading />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders snapshot [title && subtitle]", () => {
    const title = "someTitle";
    const subtitle = "someSubtitle";
    const component = renderer.create(
      <Heading title={title} subtitle={subtitle} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render no title nor subtitle", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.equals(<></>)).toBe(true);
  });
  it("should render a title and subtitle", () => {
    const title = "someTitle";
    const wrapper = shallow(<Heading title={title} />);
    expect(wrapper.someWhere(node => node.text() === title)).toBe(true);
  });
  it("should render a title and subtitle", () => {
    const title = "someTitle";
    const subtitle = "someSubtitle";
    const wrapper = shallow(<Heading title={title} subtitle={subtitle} />);
    expect(
      wrapper.find(".title").someWhere(node => node.text() === title)
    ).toBe(true);
    expect(
      wrapper.find(".subtitle").someWhere(node => node.text() === subtitle)
    ).toBe(true);
  });
});
