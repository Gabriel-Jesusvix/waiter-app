import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { products } from "../mocks/products";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";


export function Main (){
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />
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
            <Button
              loading={false}
              onPress={() => setIsTableModalVisible(true)}
              disabled={false}
            >
              Novo pedido
            </Button>
          </FooterContainer>
        </Footer>
      </Container>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={() =>{}}
      />
    </>

  )
}
