import { Inject, Injectable } from '@nestjs/common';
import { createOrderDTO } from './create-order-dto';
import { ClientKafka, KafkaContext } from '@nestjs/microservices';
@Injectable()
export class AppService {
  constructor(@Inject('BILL_SERVICE') private readonly client: ClientKafka) {}
  getHello(): string {
    return 'Hello World!';
  }

  billOrder(createOrderDTO: createOrderDTO): string {
    // console.log("receiving user inside billing",createOrderDTO)
    console.log(`handling event ${{...createOrderDTO}}`);
    // let response =
    this.client.send('bill_order', createOrderDTO).subscribe((user) => {
      console.log(`charging ${user.name} for a price of ${user.price}`);
    });
    // console.log('the response after sending event ', response);
    return '';
  }
}
