export  interface IValues {
    name:string;
    id:number
  };
export type Tdata = Array<string>

export interface Imain  {
  [index:string] : string;
}

export interface IRecipeObject {
  [index:string| number] :string
}

export interface IcategoryMealObject {
  strMeal:string;
  strMealThumb:string;
  idMeal:string
}
  // export type TJson Record<string;unknown>