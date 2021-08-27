export class CreateUserDto {
  readonly userId: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role: any;
}
