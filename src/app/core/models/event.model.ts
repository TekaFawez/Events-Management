import { UserModel } from "./user.model";

export class EventModel {
    id: number | undefined;
    owner: UserModel | undefined
}