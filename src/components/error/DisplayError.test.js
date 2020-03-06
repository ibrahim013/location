import React from "react";
import { shallow } from "enzyme";

import DisplayErrorComponent from "./DisplayErrorComponent";

describe("Error", () => {
  it("should contain the correct text", () => {
    const component = shallow(<DisplayErrorComponent message="error" />);
    expect(component.text()).toEqual("error");
  });
});
