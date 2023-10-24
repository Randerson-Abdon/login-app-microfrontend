interface IUser {
  id: number;
  name: string;
  email: string;
}

class User implements IUser {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  updateEmail(newEmail: string): void {
    // Validação e lógica de negócios para atualizar o e-mail
    this.email = newEmail;
  }

  // Outros métodos relacionados à lógica de negócios
}

export default User;
