// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Button from "../";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it('<Button text="Test" />', () => {
    const wrapper = mount(<Button text="Test" onPress={() => {}} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("onPress()", () => {
    const spy = jest.fn();
    const wrapper = mount(<Button text="Test" onPress={spy} />);
    wrapper
      .find("TouchableOpacity")
      .first()
      .props()
      .onPress();

    expect(spy).toBeCalled();
  });
});
