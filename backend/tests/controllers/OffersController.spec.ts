import Authentication from "../../api/models/Authentication";
import Offer from "../../api/models/Offer";

describe('Offers tests', () => {
  it('should search for offers', async () => {
    jest.setTimeout(30000);
    const user = await Authentication.signIn('test@gmail.com', '+33667182298');
    const offers = await Offer.searchOffers(user.userToken, 48.870377, 2.370615, 48.882719, 2.322451);
    expect(offers.length).toBeGreaterThan(1);
  });
})
