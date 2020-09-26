import User from "./User";
import * as rp from 'request-promise';

export default class Authentication {
  static isUserSignedIn: boolean = false;
  static doesUserExist: boolean = false;

  static signUp = async (user: User): Promise<void> => {

    try {

      const options = {
        method: 'POST',
        uri: 'https://staging.api.external.thegoodseat.fr/registeruser',
        headers: {
          'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig'
        },
        body: {
          'email': user.email,
          'firstName': user.firstName,
          'lastName': user.lastName,
          'birthDate': user.birthDate,
          'phoneNumber': user.phoneNumber,
          'isPhoneNumberVerified': user.isPhoneNumberVerified,
          'country': user.country
        },
        json: true
      };

      const result = await rp(options);

      if (result.body.userExists) {
        user.setUserToken(result.body.userToken);
        Authentication.doesUserExist = true;
      }
      else {
        Authentication.doesUserExist = false;

        // TODO: throw/catch locally is not a best practice --> change this behaviour !
        throw new Error('User does not exist');
      }
    } catch(error) {
      console.log(error);
      Authentication.doesUserExist = false;
      throw new Error('Issue when user sign up : ' + error.message);
    }

  }

  static signIn = async (email: string, phoneNumber: string): Promise<User> => {

    try {

      const options = {
        method: 'POST',
        uri: 'https://staging.api.external.thegoodseat.fr/loginuser',
        headers: {
          'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig'
        },
        body: {
          'email': email,
          'phoneNumber': phoneNumber,
        },
        json: true
      }

      const result = await rp(options);

      if (result.body.token) {

        //TODO: should find a better way than set my personal birthDate in case API doesn't provide it... --'
        const user = new User(
          result.body.userInfo.email,
          result.body.userInfo.firstname,
          result.body.userInfo.lastname,
          '21/02/1992',
          result.body.userInfo.phonenumber,
          true,
          result.body.userInfo.country
        )

        user.setUserToken(result.body.token);
        Authentication.isUserSignedIn = true;
        return user;
      } else {
        Authentication.isUserSignedIn = false;

        //TODO: same thing in here : bad practice (throw/catch locally)
        throw new Error('No user token present');
      }

    } catch(error) {
      Authentication.isUserSignedIn = false;
      throw new Error('Issue during user sign in : ' + error.message);
    }

  }

}
