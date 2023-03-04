import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
  //    MongooseModule.forRoot('mongodb://localhost:27017/nestjs', {
  //   useNewUrlParser: true,
  // }), 

    CarModule
  ],
})
export class AppModule {}
