import { handleProductCheckout } from '../services/handle_api'
import userContext from '../context/UserContext'
import { useContext } from 'react'
import buyBlue from '/buy-blue.svg'
import buyWhite from '/buy-white.svg'
import coin from '/coin.svg'

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
      <div className='shadow-[3px_4px_8px_-2px_rgba(0,0,0,.14)] hover:shadow-[17px_13px_30px_-7px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:transition-all hover:duration-700 duration-700'>
        <div className='block'>
          <img
            src={buyBlue}
            className='absolute right-[.5rem] top-[.5rem]'
          />
          <div className='absolute top-0 h-full w-full bg-[#14caf7c3] group-hover:transition-opacity group-hover:opacity-100 group-hover:duration-700 duration-700 opacity-0'>
            <img
              src={buyWhite}
              className='absolute right-[.1rem] top-[.4rem] group-hover:absolute'
            />
            <div className='flex flex-col mx-5 h-full justify-center gap-2'>
              <div className='flex justify-center gap-2'>
                <span className='text-white leading-none text-3xl'>{cost}</span>
                <img src={coin} className='h-7 mt-1'/>
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
