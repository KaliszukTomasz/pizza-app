import {Dish} from './dish';

export class Order {

  id?: number;

  firstName: string;

  lastName: string;

  address: string;

  subject?: string;

  status: boolean;

  dishes: Dish[];

}
