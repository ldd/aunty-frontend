import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Navbar, { NavBarLink, NavBarBurger } from "./Navbar";

describe("Navbar", () => {
  it("renders snapshot [empty]", () => {
    const component = renderer.create(<Navbar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders snapshot [pages]", () => {
    const pages = ["pageOne", "pageTwo"];
    const component = renderer.create(<Navbar pages={pages} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render no empty navbar", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.render().find(".navbar-item").length).toBe(0);
  });
  it("should render a navbar with pages", () => {
    const pages = ["pageOne", "pageTwo"];
    const wrapper = shallow(<Navbar pages={pages} />);
    expect(wrapper.render().find(".navbar-item").length).toBe(2);
    expect(
      wrapper.find(NavBarLink).everyWhere(node => {
        const text = node.render().text();
        return pages.includes(text);
      })
    ).toBe(true);
  });
  it("should render a navbar with selected pages", () => {
    const pages = ["pageOne", "pageTwo"];
    const wrapper = shallow(<Navbar pages={pages} route={pages[0]} />);
    expect(
      wrapper
        .find(NavBarLink)
        .someWhere(node => node.dive().hasClass("is-active"))
    ).toBe(true);
  });
  it("should handle user clicking on a page", () => {
    const pages = ["pageOne", "pageTwo"];
    const mockedChangeRoute = jest.fn();
    const wrapper = shallow(
      <Navbar pages={pages} changeRoute={mockedChangeRoute} />
    );
    expect(mockedChangeRoute.mock.calls.length).toBe(0);
    wrapper
      .find(NavBarLink)
      .last()
      .dive()
      .simulate("click");
    expect(mockedChangeRoute.mock.calls.length).toBe(1);
  });
  it("should handle user clicking on the hamburger menu", () => {
    const pages = ["pageOne", "pageTwo"];
    const wrapper = shallow(<Navbar pages={pages} />);

    const getBurgerParent = () => wrapper.find(NavBarBurger).parent();
    const renderBurger = () => wrapper.find(NavBarBurger).render();

    expect(renderBurger().hasClass("is-active")).toBe(false);
    getBurgerParent().simulate("click");
    expect(renderBurger().hasClass("is-active")).toBe(true);
    getBurgerParent().simulate("click");
    expect(renderBurger().hasClass("is-active")).toBe(false);
  });
});
