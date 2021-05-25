import { PhoneNumberType } from "./phoneNumberType.model";

export class PersonPhone{
  public businessEntityID: number;
  public phoneNumber: string;
  public phoneNumberTypeID: number
  public phoneNumberType: PhoneNumberType;
  public personID: number;
}
