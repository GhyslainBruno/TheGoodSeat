export default class User {

  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  isPhoneNumberVerified: boolean;
  country: string;
  userToken?: string;

  constructor(email: string, firstName: string, lastName: string, birthDate: string, phoneNumber: string, isPhoneNumberVerified: boolean, country: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.isPhoneNumberVerified = isPhoneNumberVerified;
    this.country = country;
  }

  setUserToken(token: string) {
    this.userToken = token;
  }

}
