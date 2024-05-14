import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2015
        },
        {
            id: 2,
            brand: 'BMW',
            model: 'X5',
            year: 2018
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Fiesta',
            year: 2016
        },
        {
            id: 4,
            brand: 'Audi',
            model: 'A4',
            year: 2017
        }
    ];
    
    findAll() {
        return this.cars;
    }

    findById(id: number) {
        const car = this.cars.find(car => car.id === id);
            if (!car) 
                throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }
}
