export class User {
  name: string;
  password: string;
  telephone: string;
  email: string;
  note: string;

  constructor(
    name: string,
    password: string,
    telephone: string,
    email: string,
    note: string
  ) {
    this.name = name;
    this.password = password;
    this.telephone = telephone;
    this.email = email;
    this.note = note;
  }
}
