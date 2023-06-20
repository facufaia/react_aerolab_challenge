import { handleProductCheckout } from '../services/handle_api'
import userContext from '../context/UserContext'
import { useContext } from 'react'

function BuyUnavailable({ product, setIsVisible }) {
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
        <div>
          <div className='absolute right-[.5rem] top-[.5rem] flex gap-1 items-center text-[#f2f2f2] bg-[#696969cb] rounded-2xl px-3 py-[0.4rem] font-light group-hover:hidden'>
            <span className='leading-noner text-[0.85rem]'>You need {cost}</span>
            <img src='../../public/coin.svg' className='h-[1.1rem] mt-[0.16rem]'/>
          </div>
          <div className='absolute top-0 h-full flex flex-col items-center justify-center gap-4 w-full group-hover:transition-opacity group-hover:opacity-100 group-hover:duration-500 duration-500 opacity-0 bg-[#121212dd]'>
            <div className='flex justify-center gap-2'>
              <span className='text-white leading-none text-3xl'>
                {cost}
              </span>
              <img src='../../public/coin.svg' className='h-7 mt-1' />
            </div>
            <button className='rounded-2xl bg-white text-[#a5a5a5] py-[3px] px-3 '>
              Purchase coins now
            </button>
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

export default BuyUnavailable
