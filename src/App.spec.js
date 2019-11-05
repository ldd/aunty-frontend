import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App, { pages, Router } from "./App";
import Navbar, { NavBarLink } from "./components/Navbar";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders snapshot", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders ", () => {
    const wrapper = shallow(<App />);

    const getNavbarRoute = () => wrapper.find(Navbar).prop("route");
    const getRouterRoute = () => wrapper.find(Router).prop("route");
    expect(getNavbarRoute()).toBe("");
    expect(getRouterRoute()).toBe("");

    pages.forEach((page, pageIndex) => {
      // click on a route
      wrapper
        .find(Navbar)
        .dive()
        .find(NavBarLink)
        .at(pageIndex)
        .dive()
        .simulate("click");
      expect(getNavbarRoute()).toBe(page);

      // expect such route to be rendered
      const route = wrapper.find(Router);
      expect(route.dive().name()).toBe(page);
      expect(getRouterRoute()).toBe(page);
    });
  });
});
