/* import axios from 'axios';
import User from '../entities/User';

interface IAuthenticateUser {
  execute(email: string, password: string): Promise<User | null>;
}

class AuthAPIAdapter implements IAuthenticateUser {
  async execute(email: string, password: string): Promise<User | null> {
    try {
      const response = await axios.post('/api/auth', { email, password });
      if (response.data && response.data.user) {
        return new User(
          response.data.user.id,
          response.data.user.name,
          response.data.user.email
        );
      }
      return null;
    } catch (error) {
      // Handle error
      return null;
    }
  }
}

export default AuthAPIAdapter; */
import User from '../entities/User';
import mockData from '../data/mockData.json';

interface IAuthenticateUser {
  execute(email: string, password: string): Promise<User | null>;
}

class AuthAPIAdapter implements IAuthenticateUser {
  async execute(email: string, password: string): Promise<User | null> {
    const user = mockData.users.find(
      user => user.email === email && user.password === password
    );
    if (user) {
      return new User(user.id, user.name, user.email);
    }
    return null;
  }
}

export default AuthAPIAdapter;
