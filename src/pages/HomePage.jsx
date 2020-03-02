import React, { useState } from "react";
import "./HomePage.css";
import InputComponent from "../components/input/InputComponent";
import MapComponent from "../components/map/MapComponent";
import ButtonComponent from "../components/button/ButtonComponent";
import { validateTextInput } from "../helpers/ValidateTextInput";
import {
  mockApi_geocodeAddress,
  mockApi_lookupUnderwritingRisks
} from "../api/mockApi";
import SpinnerComponent from "../components/spinner/SpinnerComponent";
import DisplayErrorComponent from "../components/error/DisplayErrorComponent";

const HomePage = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [state, setState] = useState({
    latitude: 0,
    longitude: -0
  });
  const [inputState, setInputState] = useState("");
  const [errorState, setErrorState] = useState({
    showError: false,
    message: ""
  });

  const handleInputChange = event => {
    const { value } = event.target;
    setInputState(value);
  };

  const handleMockAptCall = async data => {
    setErrorState({
      ...errorState,
      showError: false
    });
    if (data) {
      try {
        setLoadingState(true);
        let getAddress = await mockApi_geocodeAddress(inputState);
        const [geometry] = getAddress;
        const [lat, lng] = geometry.geometry.coordinates;
        let getUnderwritingRisk = await mockApi_lookupUnderwritingRisks(
          lat,
          lng
        );
        setLoadingState(false);
        setState({ ...getUnderwritingRisk });
      } catch (error) {
        setErrorState({
          ...errorState,
          showError: true,
          message: error
        });
        setLoadingState(false);
      }
      return;
    }
    setErrorState({
      ...errorState,
      showError: !errorState.showError,
      message: "Invalid input"
    });
    setLoadingState(false);
  };

  const { latitude, longitude, sk_risk_fema, sk_risk_katrisk } = state;
  const { showError, message } = errorState;

  const handleSubmit = () => {
    let validatedInput = validateTextInput(inputState);
    handleMockAptCall(validatedInput);
  };

  return (
    <section className="container">
      <header>SpatialKey</header>
      <section className="search-wrapper">
        <aside className="input-find">
          <InputComponent
            type="text"
            className="input-address"
            placeholder="Enter Address"
            onChange={handleInputChange}
            value={inputState}
          />
        </aside>
        <aside>
          {isLoading ? (
            <SpinnerComponent />
          ) : (
            <ButtonComponent
              title="Find"
              onClick={handleSubmit}
              className="btn-find"
            />
          )}
        </aside>
        <aside>
          {showError && <DisplayErrorComponent message={message} />}
        </aside>
      </section>
      <section className="display-map-container">
        <aside className="map-aside">
          <MapComponent lat={latitude} lng={longitude} />
        </aside>
        <aside className="label-aside">
          {sk_risk_fema || sk_risk_katrisk ? (
            <>
              <div>
                FEMA LABEL: <span>{sk_risk_fema}</span>
              </div>
              <div>
                KatRisk LABEL: <span>{sk_risk_katrisk}</span>
              </div>
            </>
          ) : (
            <div> Risk Data Not Available at the moment</div>
          )}
        </aside>
      </section>
    </section>
  );
};
export default HomePage;
