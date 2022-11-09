export namespace ReducersTypes {
    export interface IPages {
        list: {
            count: number,
            pages: Array<IPage>
        }

    }

    export interface IPage {
        id: number,
        namePage: string,
        timeCreate: number,
        pageStatus: boolean,
        author: string,
        authorStatus: boolean,
        file: {}
    }

    export interface IFiles {
        list: {
            count: number,
            files: Array<IFile>
        }
    }

    export interface IFile {
        file: any
        id: number,
        name: string,
        timeCreate: number,
        type?: string
    }

    export interface Users {
        users: Array<User>,
        activeUser: User,
        statusAuth: boolean,
        authorized: boolean
    }

    export interface User {
        userName: string,
        email: string,
        password: string,
        admin: boolean
    }
}