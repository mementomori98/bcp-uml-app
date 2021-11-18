import {Model} from "../utils/Model";

export class Team {
    public name: string;
    public usersAmount: number;
    public projectsAmount: number;
    public id: number;

    public constructor(init?: Partial<Team>) {
        Object.assign(this, init);
    }
}

export class CreateTeamRequest extends Model<CreateTeamRequest> {
    public teamName: string;
    public workspaceId: string;
}