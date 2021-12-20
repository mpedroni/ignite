import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults";

type Results = {
  totalPrice: number;
  data: any[];
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    data: []
  } as Results);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    const products = data.map(product => ({
      id: product.id,
      title: product.title,
      price: product.tile,
      priceFormatted: formatter.format(product.price),
    }))

    const totalPrice = data.reduce((total, product) => total + product.price, 0)

    setResults({totalPrice, data: products});
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults 
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}

/*
 * Ciclo de renderização do React
 * 
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, atualizar o que alterou
 */

/*
 * Quando usar o `memo`?
 * 
 * 1. Pure Functional Components (componetes sem responsabilidade, componentes apenas visuais...)
 * 2. Renders too often 
 * 3. Re-renders with same props
 * 4. Medium to big components
 */

/*
 * useMemo / useCallback
 * 
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando a informação está sendo passada para um componente filho, mesmo que não seja um cálculo pesado, para evitar que o componente filho seja re-renderziado)
 * 
 */
