import {Dish} from './dish';

export interface Order {

  id?: number,
  firstName: string,
  lastName: string,
  address: string,
  subject?: string,
  status: boolean,
  dishes: Dish[],
}
