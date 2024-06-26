import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid' 
@Injectable()
export class CarsService {
    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
            year: 2015
        },
        {
            id: uuid(),
            brand: 'BMW',
            model: 'X5',
            year: 2018
        },
        {
            id: uuid(),
            brand: 'Ford',
            model: 'Fiesta',
            year: 2016
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A4',
            year: 2017
        }
    ];
    
    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
            if (!car) 
                throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }
}
