import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import getService from "./Services";
import { AppContext } from "./utils/AppContext";
export class AuthenticationService {
    constructor() {
        this.auth = getAuth();
        this.context = getService(AppContext);
    }
    async login(username, password) {
        try {
            let res = await signInWithEmailAndPassword(this.auth, username, password);
            this.context.setAccessToken(await res.user.getIdToken());
        }
        catch (err) {
            throw err;
        }
    }
    async loginGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            let res = await signInWithPopup(this.auth, provider);
            this.context.setAccessToken(await res.user.getIdToken());
        }
        catch (err) {
            throw err;
        }
    }
    logout() {
        this.context.setAccessToken(null);
    }
    isLoggedIn() {
        console.log(this.context.getAccessToken());
        return this.context.getAccessToken() != null;
    }
}
//# sourceMappingURL=AuthenticationService.js.map