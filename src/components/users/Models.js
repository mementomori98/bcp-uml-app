import { Model } from "../utils/Model";
export class User {
    constructor(init) {
        Object.assign(this, init);
    }
}
//+++++++++++++++++++++
export class UserInvitationRequest {
    constructor(init) {
        Object.assign(this, init);
    }
}
export class WorkspaceUsersResponse extends Model {
}
export class ProjectUserRequest extends Model {
}
export class TeamUserRequest extends Model {
}
//+++++++++++++++++++++
export class UserToProject extends Model {
}
export class UserToTeam {
    constructor(init) {
        Object.assign(this, init);
    }
}
//# sourceMappingURL=Models.js.map