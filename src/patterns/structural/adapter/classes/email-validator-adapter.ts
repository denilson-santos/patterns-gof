import EmailValidator from 'email-validator';

import { EmailValidatorInterface } from '../interfaces/email-validator-interface';

export class EmailValidatorAdapter implements EmailValidatorInterface {
  isValid(email: string): boolean {
    return EmailValidator.validate(email);
  }
}
