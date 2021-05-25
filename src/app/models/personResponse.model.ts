import { Person } from "./person.model";

export class PersonResponse{
  public personObjects: Person[];
  public success: boolean;
  public errors: any;
}
