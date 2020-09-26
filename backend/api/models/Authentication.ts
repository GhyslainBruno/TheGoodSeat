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
          'isPhoneNumberVerified': user.isPhoneNumberVerifier,
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

  static signIn = async (user: User): Promise<void> => {
    Authentication.isUserSignedIn = true;
  }

}
