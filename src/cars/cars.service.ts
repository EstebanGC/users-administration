import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsModule } from './cars.module';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand:'Honda',
            model: 'Corolla'
        },
        {
            id:2,
            brand: 'Ford',
            model: 'Fiesta'
        },
        {
            id: 3,
            brand: 'Jeep',
            mode: 'Gladiator'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        
        if (!car) {
            throw new NotFoundException(`Car with id '${id}' not found`);
        }

        return car;
    }
}
