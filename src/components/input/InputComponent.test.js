import React from "react";

import { shallow } from "enzyme";

import InputComponent from "./InputComponent";

describe("Input", () => {
  it("should contain the right props", () => {
    const component = shallow(
      <InputComponent
        type="text"
        placeholder="test"
        onChange={() => {}}
        value="test"
        className="test-class"
      />
    ).find("input");

    expect(component.prop("type")).toEqual("text");
    expect(component.prop("placeholder")).toEqual("test");
    expect(component.hasClass("test-class")).toEqual(true);
  });
});
