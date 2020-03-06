import React from "react";
import { shallow } from "enzyme";

import HomePageComponent from "./HomePage";
import InputComponent from "../components/input/InputComponent";
import MapComponent from "../components/map/MapComponent";
import ButtonComponent from "../components/button/ButtonComponent";
import DisplayErrorComponent from "../components/error/DisplayErrorComponent";
import SpinnerComponent from "../components/spinner/SpinnerComponent";

describe("Home Page Component", () => {
  const component = shallow(<HomePageComponent />);
  it("should load input component", () => {
    expect(component.find(InputComponent)).toHaveLength(1);
  });
  it("should load map component", () => {
    expect(component.find(MapComponent)).toHaveLength(1);
  });
  it("should load button component", () => {
    expect(component.find(ButtonComponent)).toHaveLength(1);
  });
  it("should load map component", () => {
    expect(component.find(MapComponent)).toHaveLength(1);
  });
  it("should not load error component", () => {
    expect(component.find(DisplayErrorComponent)).toHaveLength(0);
  });
  it("should not load Spinner component", () => {
    expect(component.find(SpinnerComponent)).toHaveLength(0);
  });
});
