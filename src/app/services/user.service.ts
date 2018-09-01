import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


const appKey = "kid_BkREFei8m" // APP KEY HERE;
const appSecret = "0d7ba5cd67b749c58d2c49d02a5ec7ec" // APP SECRET HERE;
const userId = localStorage.getItem('_id');
const username = localStorage.getItem('username')
// const userUrl = `https://baas.kinvey.com/user/${appKey}/${userId}`;
const changeUserPass = `https://baas.kinvey.com/rpc/${appKey}/${username}/user-password-reset-initiate`

@Injectable()
export class UserService {
    private currentAuthtoken: string;

    constructor(private http: HttpClient) {
    }


    getUserData(profileId) {
        return this.http.get(`https://baas.kinvey.com/user/${appKey}/${profileId}`);
    }

    getAllUsers() {
        return this.http.get(`https://baas.kinvey.com/group/${appKey}`)
    }

    destroy(Id) {
        return this.http.delete(`https://baas.kinvey.com/user/${appKey}/${Id}`);
    }

}