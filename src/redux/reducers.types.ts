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
        file : {}
    }
}