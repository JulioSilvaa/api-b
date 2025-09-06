import CustomerEntity from "../core/entities/customerEntity.js";
import type ICustomer from "../core/interfaces/CustomerInterface.js";

export default class CustomerAdapter {
  static async create({email,name,phone}: ICustomer){
    return new CustomerEntity({email,name,phone});
  }
}