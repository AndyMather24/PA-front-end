import { Google, Constants } from "expo";
const scopes = ["profile", "email"];
const loginSync = async () => {
  try {
    const result = Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      iosClientId: Constants.manifest.extra.googleAppId.ios,
      androidStandaloneAppClientId: "",
      iosStandaloneAppClientId: "",
      scopes
    });
    if (result.type === "success") {
      return Promise.resolve(result.accessToken);
    } else {
      return Promise.reject("no token");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const googleApi = { loginSync };
