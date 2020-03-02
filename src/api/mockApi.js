import { mockUnderwritingRisk, mockAddress } from "../Fixtures";

/**
 * @param addressString - the address you want to geocode
 *
 * @return A Promise that resolves with a result after a few seconds
 * The "result" is an array of GeoJSON Objects (http://geojson.org/geojson-spec.html#geojson-objects)
 */
export const mockApi_geocodeAddress = async addressString => {
  const findAddress = mockAddress.find(
    ({ properties }) =>
      properties.street.toLowerCase() === addressString.toLowerCase()
  );

  let promise = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        !!findAddress
          ? resolve([findAddress])
          : reject("oops!!! can't find location"),
      2000
    );
  });

  let result = await promise;
  return result;
};

/**
 * @param latitude
 * @param longitude
 *
 * @return A Promise that resolves with the result of the lookup
 * The result is an Object with keys that represent each risk
 */
export const mockApi_lookupUnderwritingRisks = async (lat, lng) => {
  const locationLookUp = mockUnderwritingRisk.find(
    ({ latitude, longitude }) => latitude === lat && longitude === lng
  );

  let promise = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        !!locationLookUp
          ? resolve(locationLookUp)
          : reject("oops!!! something went wrong"),
      1000
    );
  });

  let result = await promise;
  return result;
};
