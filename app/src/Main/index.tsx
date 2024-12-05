import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { products } from "../mocks/products";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";
import { Cart } from "../components/Cart";


export function Main (){
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('')

  function handleSaveTable(table:string) {
    setSelectedTable(table)
  }

  function handleResetOrder() {
		setSelectedTable('');
		// setCartItems([]);
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
            onAddToCart={() =>{}}
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
              <></>
						// <Cart
            // cartItems={cartItems}
            // onAdd={handleAddToCart}
            // onDecrement={handleDecrementCartItem}
            // onConfirmOrder={handleResetOrder}
            // selectedTable={selectedTable}
						// />
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
