import{ Problem } from './Problem';
export class Enterprise{

public _id : string;
  public CNPJ : string;
  public Name : string;
  public Login : string;
  public Password : string;
  public Description : string;
  public RegistrationDate : string;
  public Categories : Array<string>;
  public Website : string;
  public Problems : Array<Problem>;
}
