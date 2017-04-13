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
                let amanDetail = {
                    firstName: 'Ranjeet',
                    lastName: 'Singh',
                    age: 29,
                    sex: 'Male',
                    role: 'Web developer'
                };
                resolve(amanDetail);
            } else {
                resolve({error: 'No user exist with '+ username});
            }
        });
    }
}