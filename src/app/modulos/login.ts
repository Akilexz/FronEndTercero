export class Login {
  user: string;
  password: string;

  constructor(object: any) {
    this.user = (object.user) ? object.user : null;
    this.password = (object.password) ? object.password : null;
  }
}
