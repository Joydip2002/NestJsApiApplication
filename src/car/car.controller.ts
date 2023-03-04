import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { carDto } from './car.dto';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { query } from 'express';
@Controller('cars')
export class CarController {
    constructor(private carService : CarService){}

    @Get()
    public getCars(){
        return this.carService.getCars();
    }

    @Post()
    public postCars(@Body() car: carDto){
        return this.carService.postCars(car);
    }

    @Get(':id')
    async getCarById(@Param('id') id : number){
        return this.carService.getCarById(id);
    }

    @Delete(':id')
    async deleteCarById(@Param('id') id : number){
        return this.carService.deleteCarById(id);
    }

    @Put(':id')
    async putCarById(@Param('id') id :number, @Query() query){
        const propertyName = query.propertyName;
        const propertyValue = query.propertyValue;
        return this.carService.putCarById(id,propertyName,propertyValue);
    }
}
