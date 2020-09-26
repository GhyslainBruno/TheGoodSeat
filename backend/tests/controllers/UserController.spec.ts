import User from "../../api/models/User";
import Authentication from "../../api/models/Authentication";

describe('Authentication tests', () => {
  it('should sign up the user', () => {
    const user = new User(
      'test@gmail.com',
      'Kim',
      'Hernandez',
      '1996-05-17',
      '+33667182298',
      true,
      'France'
    )

    expect(Authentication.doesUserExist).toBe(false);
    Authentication.signUp(user);
    expect(Authentication.doesUserExist).toBe(true);

  });
})
