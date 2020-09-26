import User from "./User";

export default class Authentication {
  static isUserSignedIn: boolean = false;
  static doesUserExist: boolean = false;

  static signUp = async (user: User) => {
    Authentication.doesUserExist = true;
  }

}
