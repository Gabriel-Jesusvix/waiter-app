import { Order } from "../../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {

  function handleOpenOrder() {

  }


  return (
    <Board>
      <OrderModal />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      <OrdersContainer>
        {orders.map((order) => (
          <button type="button" key={order._id} onClick={handleOpenOrder}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} itens</span>
          </button>
        ))}
      </OrdersContainer>
    </Board>
  );
}
