import { handleProductCheckout } from '../services/handle_api'
import userContext from '../context/UserContext'
import { useContext } from 'react'

function BuyAvailable({ product, setIsVisible }) {
  const { _id, category, name, cost, img } = product
  const stateUser = useContext(userContext)
  return (
    <li
      className='relative group cursor-pointer'
      onClick={() => {
        handleProductCheckout(stateUser, setIsVisible, cost, _id)
      }}
    >
      <div className='border shadow-lg relative hover:shadow-2xl hover:absolute hover:-top-2'>
        <div className='block'>
          <img
            src='./assets/buy-blue.svg'
            className='absolute right-[.5rem] top-[.5rem]'
          />
          <div className='absolute top-0 h-full w-full bg-[#14caf7c3] group-hover:transition-opacity group-hover:opacity-100 group-hover:duration-500 duration-500 opacity-0'>
            <img
              src='./assets/buy-white.svg'
              className='absolute right-[.1rem] top-[.4rem] group-hover:absolute'
            />
            <div className='flex flex-col mx-5 h-full justify-center gap-3'>
              <div className='flex justify-center gap-2'>
                <span className='text-2xl text-white'>{cost}</span>
                <img src='./assets/coin.svg' className='h-7' />
              </div>
              <button className='rounded-3xl bg-white text-[#747474] leading-[2.2rem]'>
                Redeem now
              </button>
            </div>
          </div>
        </div>
        <img src={img.url} className='w-full px-2' />
        <div className='py-4 mx-6 border-t'>
          <span className='block text-sm text-[#c3c3c3]'>{category}</span>
          <span className='text-[#696969]'>{name}</span>
        </div>
      </div>
    </li>
  )
}

export default BuyAvailable
