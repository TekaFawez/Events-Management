import { RoleModel } from "./role.model";

export class UserModel {
   id: number | undefined;
   firstName: string | undefined;
   lastName: string | undefined;
   role: RoleModel | undefined;
}