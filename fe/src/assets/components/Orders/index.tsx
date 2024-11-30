import { Order } from "../../../types/Order";
import { OrdersBoard } from "../OdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "674a1f1986c09fb7c81a70aa",
    table: "08",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1732824868950-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "674a1f1986c09fb7c81a70ab",
      },
      {
        product: {
          name: "Coca Cola Lata",
          imagePath: "1732910076036-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "674a1f1986c09fb7c81a70ac",
      },
    ],
  },
];
export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={[]}/>
      <OrdersBoard icon="✅" title="Pronto!" orders={[]}/>
    </Container>
  );
}
