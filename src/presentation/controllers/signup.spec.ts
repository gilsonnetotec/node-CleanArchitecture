import { describe, test } from "node:test";
import { SignUpCOntroller } from "../signup";

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provider', () => {
    const sut = new SignUpCOntroller()
    const httpRequest = {
        body: {
            //name: 'any_name',
            email: 'any_email@mail.com',
            password: 'any_password',
            passwordConfirmation: 'any_password'
        }
    }
    const httpReponse = sut.handle(httpRequest)
    expect(httpReponse.statusCode).toBe(400)
  });
});
