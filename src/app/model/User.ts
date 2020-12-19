export class User{
  username: String;
  password: String;
  email: String;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
}
}
