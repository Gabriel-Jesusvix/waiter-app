import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { products } from "../mocks/products";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";


export function Main (){
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('')
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      quantity: 1,
      product: products[0]
    },
    {
      quantity: 2,
      product: products[1]
    },
  ])
  function handleSaveTable(table:string) {
    setSelectedTable(table)
  }

  function handleResetOrder() {
		setSelectedTable('');
		// setCartItems([]);
	}

  function handleAddToCart(product: Product) {
    if(!selectedTable) {
			setIsTableModalVisible(true);
		}
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

			if (itemIndex < 0) {
				return prevState.concat({
					quantity: 1,
					product,
				});
			}
			const newCartItems = [...prevState];
			const item = newCartItems[itemIndex];
			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity + 1,
			};
			return newCartItems;
		});

  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

			const item = prevState[itemIndex];
			const newCartItems = [...prevState];

			if(item.quantity === 1) {

				newCartItems.splice(itemIndex, 1);

				return newCartItems;
			}
			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity - 1,
			};
			return newCartItems;
		});
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu
            onAddToCart={handleAddToCart}
            products={products}
          />
        </MenuContainer>
        <Footer>
          <FooterContainer>
            {
              !selectedTable && (
                <Button
                  loading={false}
                  onPress={() => setIsTableModalVisible(true)}
                  disabled={false}
                >
                  Novo pedido
                </Button>
              )
            }
            {selectedTable && (
						<Cart
							cartItems={cartItems}
							onAdd={handleAddToCart}
							onDecrement={handleDecrementCartItem}
							onConfirmOrder={handleResetOrder}
							selectedTable={selectedTable}
						/>
					)}
          </FooterContainer>
        </Footer>
      </Container>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>

  )
}
