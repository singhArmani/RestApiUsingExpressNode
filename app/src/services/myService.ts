import { users } from '../jsonData';

//creating an interface 
export interface userDetail {
    firstName: string,
    lastName: string,
    age: Number,
    sex: string,
    role: string
}

export interface errorObject {
    error: string
}

export class myService {
    constructor() { }

    public static getUserDetail(username: string): Promise<userDetail> {
        return new Promise<userDetail | errorObject>((resolve, reject) => {
            if (username === 'aman') {
                resolve(users[0]);
            } else {
                resolve({error: 'No user exist with '+ username});
            }
        });
    }

// get all users
        public static getAllUserDetail(): Promise<userDetail[]> {
        return new Promise<userDetail[] | errorObject>((resolve, reject) => {
                resolve(users);
        });
    }
}