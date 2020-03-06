import React from "react";
import { shallow } from "enzyme";

import ButtonComponent from "./ButtonComponent";

describe("Button", () => {
  it("should contain the correct text", () => {
    const component = shallow(
      <ButtonComponent onClick={() => {}} title="find" />
    );
    expect(component.text()).toEqual("find");
  });
  it("should emits correct action upon click", () => {
    let pass = false;
    const component = shallow(
      <ButtonComponent
        onClick={() => {
          pass = true;
        }}
        title="find"
      />
    );
    component.find("button").simulate("click");
    expect(pass).toEqual(true);
  });
});
