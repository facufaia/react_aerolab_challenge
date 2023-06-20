import { handlePurhasePoints } from '../services/handle_api'
import { useContext } from 'react'
import userContext from '../context/UserContext'

function PurchasePoints() {
  const stateUser = useContext(userContext)
  return (
    <div className='w-1/5 flex flex-col items-center gap-2'>
      <span className='block text-3xl font-semibold mb-4'>Purchase Coins</span>
      <div className='flex flex-col gap-5'>
        <button
          onClick={() => {
            handlePurhasePoints(stateUser, 1000)
          }}
          className='text-2xl rounded-3xl gap-1 flex px-5 py-1 w-full items-center text-[#4f4f4f] bg-[#ededed] cursor-pointer hover:bg-[#e8e8e8]'
        >
          1000
          <img src='../../public/coin.svg' className='h-[1.6rem] mt-1'/>
        </button>
        <button
          onClick={() => {
            handlePurhasePoints(stateUser, 5000)
          }}
          className='text-2xl rounded-3xl gap-1 flex px-5 py-1 items-center text-[#4f4f4f] bg-[#ededed] cursor-pointer hover:bg-[#e8e8e8]'
        >
          5000
          <img src='../../public/coin.svg' className='h-[1.6rem] mt-1'/>
        </button>
        <button
          onClick={() => {
            handlePurhasePoints(stateUser, 7500)
          }}
          className='text-2xl rounded-3xl gap-1 flex px-5 py-1 items-center text-[#4f4f4f] bg-[#ededed] cursor-pointer hover:bg-[#e8e8e8]'
        >
          7500
          <img src='../../public/coin.svg' className='h-[1.6rem] mt-1'/>
        </button>
      </div>
    </div>
  )
}

export default PurchasePoints
