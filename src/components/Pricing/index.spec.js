import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Pricing, { PricingEntry } from ".";

describe("Heading", () => {
  it("renders snapshot [empty]", () => {
    const component = renderer.create(<Pricing />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders default labels", () => {
    const wrapper = shallow(<Pricing />);
  });
  it("renders custom label", () => {
    const wrapper = shallow(<Pricing labels={["noLabel"]} />);
  });
  it("renders custom label", () => {
    const wrapper = shallow(<PricingEntry label={"noLabel"} />);
  });
  it("renders custom label", () => {
    const wrapper = shallow(<PricingEntry />);
  });
});
