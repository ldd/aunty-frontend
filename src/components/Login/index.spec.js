import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Login, { redirectToLogin } from ".";

describe("Heading", () => {
  it("renders snapshot", () => {
    const component = renderer.create(<Login />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("redirects to login", () => {
    // mocking window.location.reload
    // https://gist.github.com/remarkablemark/5cb571a13a6635ab89cf2bb47dc004a3
    const { location } = window;
    delete window.location;
    window.location = { reload: jest.fn() };

    expect(window.location.reload).not.toHaveBeenCalled();
    redirectToLogin();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
