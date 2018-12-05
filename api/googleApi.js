import { Google, Constants } from "expo";
const scopes = ["profile", "email"];
const loginSync = async () => {
  try {
    const result = await Google.logInAsync({
      behavior: "web",
      iosClientId: Constants.manifest.extra.google.ios,
      scopes
    });
    if (result.type === "success") {
      return Promise.resolve(result);
    } else {
      return Promise.reject("no token");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export const googleApi = { loginSync };

//07529062200-5bt4njf538oph83p6btgodn1jeto65lj.apps.googleusercontent.com
