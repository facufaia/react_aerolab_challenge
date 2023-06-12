import { useState, useEffect, useCallback, useRef } from 'react'
import { getProducts } from '../services/handle_endpoints'
import { handleSort, handlePagination } from '../services/products'

function useProducts(sortValue, page) {
  const [products, setProducts] = useState([])
  let catalogueRef = useRef([])

  const handleProductsStart = useCallback(async () => {
    const catalogue = await getProducts()
    setProducts(handlePagination([...catalogue],page))
    catalogueRef.current = catalogue
  }, [])

  useEffect(() => {
    handleProductsStart()
  }, [])

  useEffect(() => {
    const sortedProducts = handleSort(sortValue, catalogueRef)
    setProducts(handlePagination(sortedProducts, page))
  }, [sortValue, page])

  return { products }
}

export default useProducts