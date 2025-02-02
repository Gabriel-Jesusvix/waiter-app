import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  AddtoCartButton,
  Separator,

} from './styles';

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

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        style={{ marginTop: 32 }}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <ProductContainer
            onPress={() => handleOpenModal(product)}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            <ProductImage
              source={{
                uri: `http://192.168.1.5:3000/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text color="#666" size={14} style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddtoCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddtoCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
