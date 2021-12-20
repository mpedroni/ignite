import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import lodash from 'lodash';

import { AddProductToWishListProps } from './AddProductToWishlist';

// import { AddProductToWishlist } from './AddProductToWishlist';
const AddProductToWishlist = dynamic<AddProductToWishListProps>(() => 
  import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist), 
  { 
    loading: () => <span>Carregando...</span>
  }
)

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      
      {isAddingToWishlist && 
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product);
});