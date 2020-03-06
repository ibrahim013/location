import React from "react";
import { shallow } from "enzyme";

import SpinnerComponent from "./SpinnerComponent";

describe("Spinner Component", () => {
  it("should render", () => {
    const component = shallow(<SpinnerComponent />);

    expect(component.html()).toEqual('<div class="spinner"></div>');
  });
});
