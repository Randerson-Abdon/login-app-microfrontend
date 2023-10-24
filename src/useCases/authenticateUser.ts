import AuthAPIAdapter from '../adapters/AuthAPIAdapter';
import User from '../entities/User';

class AuthenticateUser {
  private authAdapter: AuthAPIAdapter;

  constructor(authAdapter: AuthAPIAdapter) {
    this.authAdapter = authAdapter;
  }

  async execute(email: string, password: string): Promise<User | null> {
    return await this.authAdapter.execute(email, password);
  }
}

export default AuthenticateUser;
