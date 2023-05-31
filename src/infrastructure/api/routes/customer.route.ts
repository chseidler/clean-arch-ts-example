import express, {Request, Response} from 'express';
import CustomerRepository from '../../customer/repository/sequelize/customer.repository';
import CustomerCreateUseCase from '../../../usecase/customer/create/create.customer.usecase';
import ListCustomerUseCase from '../../../usecase/customer/list/list.customer.usecase';

export const CustomerRoute = express.Router();

CustomerRoute.post('/', async (req: Request, res: Response) => {
    const useCase = new CustomerCreateUseCase(new CustomerRepository());
    try {
        const customerDto = {
            name: req.body.name,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                number: req.body.address.number,
                zip: req.body.address.zip,
            },
        }

        const output = await useCase.execute(customerDto);
        res.send(output);
    } catch(err) {
        res.status(500).send(err);
    }
})

CustomerRoute.get('/', async (req: Request, res: Response) => {
    const useCase = new ListCustomerUseCase(new CustomerRepository());
    try {
        const output = await useCase.execute({});
        res.send(output);
    } catch (err) {
        res.status(500).send(err);
    }
})