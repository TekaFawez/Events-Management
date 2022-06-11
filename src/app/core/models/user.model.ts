// import { RoleModel } from "./role.model";

export class UserModel {
   id: number | undefined;
   name?:string;
   email?: string;
   password?:string;
   isAdmin?: true;
  //  role: RoleModel | undefined;
}
