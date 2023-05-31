import express, {Request, Response} from 'express';
import CustomerRepository from '../../customer/repository/sequelize/customer.repository';
import CustomerCreateUseCase from '../../../usecase/customer/create/create.customer.usecase';

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