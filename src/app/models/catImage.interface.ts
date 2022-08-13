export interface CatImage{
    id:string,
    url:string,
    breeds:{
        id:string,
        name:string,
        description:string,
        temperament:string
    }
}