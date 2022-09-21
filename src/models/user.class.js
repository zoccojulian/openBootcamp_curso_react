import { ROLES } from "./roles.enum";

export class User {
    userName = '';
    email = '';
    password = '';
    role = ROLES.USER;

    constructor ( userName, password, email, role ){

        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role

    }
}