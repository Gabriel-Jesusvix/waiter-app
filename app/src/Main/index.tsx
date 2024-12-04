import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { products } from "../mocks/products";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";


export function Main (){
  return (
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
            onPress={()=>{}}
            disabled={false}
          >
            Novo pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Container>
  )
}
