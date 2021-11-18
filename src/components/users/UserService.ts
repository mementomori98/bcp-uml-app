
import getService from "../utils/ServiceFactory";
import {RestClient} from "../utils/RestClient";
import type {UserInvitationRequest} from "./Models";

export class UserService {

    private readonly client = getService(RestClient);

    public async getWorkspaceUsers(id: string) {
        const res = await this.client.get('workspaces/' + id + '/users');
        return res;
    }

    public async getUserTeams() {
        const res = await this.client.get('users/teams');
        return res;
    }

    public async getUserInvitations() {
        const res = await this.client.get('users/invitations');
        return res;
    }

    public async inviteUser(request: UserInvitationRequest) {
        const res = await this.client.post('workspaces/invitation', {
            workspaceId: request.workspaceId,
            inviteeEmailAddress: request.inviteeEmailAddress,
        });
        // Todo return something relevant
        return res;
    }

    public async getCurrentUser() {
        const res = await this.client.post('users', {});
        // Todo return something relevant
        return res;
    }
}