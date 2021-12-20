import { List, ListRowRenderer } from 'react-virtualized'

import { ProductItem } from "./ProductItem";

type SearchResultProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void
}

export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultProps) {
  const rowRender: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem 
        product={results[index]}
        onAddToWishList={onAddToWishList} 
        />
    </div>
  )
  return (
    <div>
      <h2>{totalPrice}</h2>

      <List 
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRender}
      />

      {/* {results.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onAddToWishList={onAddToWishList} 
        />
      ))} */}
    </div>
  )
}