export default class User {

  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  isPhoneNumberVerifier: boolean;
  country: string;

  constructor(email: string, firstName: string, lastName: string, birthDate: string, phoneNumber: string, isPhoneNumberVerifier: boolean, country: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.isPhoneNumberVerifier = isPhoneNumberVerifier;
    this.country = country;
  }

}
