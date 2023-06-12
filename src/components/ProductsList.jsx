import BuyAvailable from './BuyAvailable'
import BuyUnavailable from './BuyUnavailable'
import userContext from '../context/UserContext'
import { useContext } from 'react'

function ProductsList({ products, setIsVisible }) {
  const { user } = useContext(userContext)

  return (
    <ul className='w-full grid grid-cols-4 gap-4 bg-white my-7'>
      {products.map((product) => {
        return product.cost <= user.points ? (
          <BuyAvailable
            key={product._id}
            product={product}
            setIsVisible={setIsVisible}
          />
        ) : (
          <BuyUnavailable
            key={product._id}
            product={product}
            setIsVisible={setIsVisible}
          />
        )
      })}
    </ul>
  )
}

export default ProductsList
