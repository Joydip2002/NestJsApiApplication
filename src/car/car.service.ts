import { HttpException, Injectable ,HttpStatus } from '@nestjs/common';
import { resolve } from 'path';
import { CarsMockdata } from './cars.mock';
@Injectable()
export class CarService {
    private cars = CarsMockdata;

    public getCars(){
        return this.cars;
    }

    public postCars(car){
        return this.cars.push(car);
    }

    public getCarById(id: number):Promise<any>{
        const carId = Number(id)
        return new Promise((resolve)=>{
            const car = this.cars.find((car)=>car.id === carId)
           if(!car){
            throw new HttpException({ reason: '404 Error' }, HttpStatus.BAD_REQUEST)
            }
        return resolve(car);
        })
    }

    public deleteCarById(id:number):Promise<any>{
        const cardId = Number(id)
        return new Promise((resolve)=>{
            const carIndex = this.cars.findIndex((car)=>car.id ===cardId)
            if(!carIndex){
                throw new HttpException("Page Error",404)
            }
            const carDelete = this.cars.splice(carIndex,1);
            return resolve(carDelete)
        })
       
    }

    // public putCarById(id : number , propertyName:string, propertyValue : string):Promise<any>{
    //     const carId =  Number(id);
    //     return new Promise ((resolve=>{
    //     const carIndex = this.cars.findIndex((car)=> car.id === carId)
    //     if(!carIndex){
    //          throw new HttpException("Not Found",404)
    //     }
    //     this.cars[carIndex][propertyName] = propertyValue;
    //     return resolve(this.cars[carIndex]);
    //  }))
    // }
    public putCarById(
        id: number,
       propertyName: string,
       propertyValue: string,
      ): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve)=> {
          const index = this.cars.findIndex((car) => car.id = carId);
          if (index == -1) {
            throw new HttpException( 'Not Found', 404);
          }
          this. cars [index] [propertyName] = propertyValue;
          return resolve(this.cars);
       });
    }
}
