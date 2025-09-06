import type IService from "../interfaces/ServicesInterface.js";

export default class EmployeeEntity {
  id?: string | undefined;
  name: string;
  description: string;
  price: number;
  duration: number; 

  constructor(props: IService) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.price = props.price;
    this.duration = props.duration; 
  }
}