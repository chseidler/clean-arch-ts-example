import ValidatorInterface from "../../@shared/validator/validator.interface";
import Customer from "../entity/customer";

export default class CustomerYupValidator implements ValidatorInterface<Customer> {
    validate(entity: Customer): void {
        
    }
}