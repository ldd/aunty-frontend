import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Integrations from ".";

describe("Heading", () => {
  it("renders snapshot [empty]", () => {
    const component = renderer.create(<Integrations />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
