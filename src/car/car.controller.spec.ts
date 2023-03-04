import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

describe('CarController', () => {
  let controller: CarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarController],
    }).compile();

    controller = module.get<CarController>(CarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
