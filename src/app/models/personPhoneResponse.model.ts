import { PersonPhone } from "./personPhone.model";

export class PersonPhoneResponse{
  public personPhoneObjects: PersonPhone[];
  public success: boolean;
  public errors: any;
}
