import { handleProductCheckout } from '../services/handle_api'
import userContext from '../context/UserContext'
import { useContext } from 'react'

function BuyUnavailable({ product, setIsVisible }) {
  const { _id, category, name, cost, img } = product
  const stateUser = useContext(userContext)
  const { user } = stateUser

  return (
    <li
      className='relative group cursor-pointer'
      onClick={() => {
        handleProductCheckout(stateUser, setIsVisible, cost, _id)
      }}
    >
      <div className='border shadow-lg relative hover:shadow-2xl hover:absolute hover:-top-2'>
        <div>
          <div className='absolute right-[.5rem] top-[.5rem] flex gap-1 items-center text-[#f2f2f2] bg-[#696969cb] rounded-2xl px-3 py-1 text-xs font-light group-hover:hidden'>
            <span>You need {cost - user.points}</span>
            <img src='./assets/coin.svg' className='h-[1.3rem]' />
          </div>
          <div className='absolute top-0 h-full w-full group-hover:transition-opacity group-hover:opacity-100 group-hover:duration-500 duration-500 opacity-0 bg-[#121212dd]'>
            <div className='flex flex-col mx-5 h-full justify-center gap-3'>
              <div className='flex justify-center gap-2'>
                <span className='text-2xl text-white'>
                  You need {cost - user.points}
                </span>
                <img src='./assets/coin.svg' className='h-7' />
              </div>
              <button className='border rounded-2xl bg-white text-[#a5a5a5] w-full'>
                Purchase now
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

export default BuyUnavailable
