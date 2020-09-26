import User from "../../api/models/User";
import Authentication from "../../api/models/Authentication";

describe('Authentication tests', () => {
  it('should sign up the user', async () => {
    const user = new User(
      'test@gmail.com',
      'Kim',
      'Hernandez',
      '1996-05-17',
      '+33667182298',
      true,
      'France'
    )

    //TODO: we should mock the rp function and check that it is called with the proper parameters
    // --> don't have the time to do such a thing for now
    expect(user.userToken).toBeUndefined();
    expect(Authentication.doesUserExist).toBe(false);
    await Authentication.signUp(user);
    expect(user.userToken).toBeDefined()
    expect(Authentication.doesUserExist).toBe(true);

  });

  it('should sign in the user', async () => {
    const user = new User(
      'test@gmail.com',
      'Kim',
      'Hernandez',
      '1996-05-17',
      '+33667182298',
      true,
      'France'
    )

    expect(Authentication.isUserSignedIn).toBe(false);
    await Authentication.signIn(user);
    expect(Authentication.isUserSignedIn).toBe(true);
  });
})
