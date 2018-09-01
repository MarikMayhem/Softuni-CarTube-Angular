import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { RegisterModel } from "../../models/register.model";
import { LoginModel } from "../../models/login.model";


const appKey = "kid_BkREFei8m" // APP KEY HERE;
const appSecret = "0d7ba5cd67b749c58d2c49d02a5ec7ec" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable()
export class AuthService {
    private currentAuthtoken: string;
    private checkIfAdmin: string;


    constructor(private http: HttpClient) {

    }

    login(model: LoginModel) {
        return this.http.post(loginUrl,
            JSON.stringify(model));
    }

    register(model: RegisterModel) {
        return this.http.post(registerUrl,
            JSON.stringify(model));

    }

    logout() {
        return this.http.post(logoutUrl,
            {});
    }

    checkIfLogged() {
        return this.currentAuthtoken === localStorage.getItem('authtoken');
    }

    isAdmin() {
        if (localStorage.getItem('isAdmin') === 'true') {
            return true
        }
        return false
    }
   

    get authToken() {
        return this.currentAuthtoken;
    }

    set authToken(value: string) {
        this.currentAuthtoken = value;
    }

}