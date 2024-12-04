import { FlatList } from "react-native"
import { products } from "../../mocks/products"
import { AddtoCartButton, ProductContainer, ProductDetails, ProductImage, Separator } from "./styles"
import { Text } from "../Text"
import { PlusCircle } from "../Icons/PlusCircle"
import { useState } from "react"
import { Product } from "../../types/Product"
import { formatCurrency } from "../../utils/formatCurrency"

interface MenuProps {
	onAddToCart: (product: Product) => void;
	products: Product[];
}


export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

	function handleOpenModal(product: Product) {
		setIsModalVisible(true);
		setSelectedProduct(product);
	}

  return  (
    <FlatList
      data={products}
      style={{ marginTop: 32}}
      contentContainerStyle={{ paddingHorizontal: 24}}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product}) => (
        <ProductContainer onPress={() => handleOpenModal(product)}>
          <ProductImage
            source={{
              uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`,
            }}
          />
          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text weight='600' size={14} color='#666'>{formatCurrency(product.price)}</Text>
          </ProductDetails>
          <AddtoCartButton onPress={() => onAddToCart(product)}>
            <PlusCircle />
          </AddtoCartButton>
        </ProductContainer>
      )}
    />
  )
}
