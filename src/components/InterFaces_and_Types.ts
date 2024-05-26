export  interface IValues {
    name:string,
    id:number
  };
export type Tdata = Array<string>

export interface Imain  {
  idMeal : string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions:string,
  strMealThumb:string,
  strTags:string,
  strYoutube?: string,
  strSource?:string
}
  // export type TJson Record<string,unknown>