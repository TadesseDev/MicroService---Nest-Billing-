import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { createOrderDTO } from './create-order-dto';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('BILL_SERVICE') private readonly client: ClientKafka,
  ) {}

  @EventPattern('create_order')
  billOrder(data: createOrderDTO) {
    this.appService.billOrder(data);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  onModuleInit() {
    this.client.subscribeToResponseOf('bill_order');
  }
}
