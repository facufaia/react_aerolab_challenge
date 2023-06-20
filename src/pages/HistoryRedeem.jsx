import History from '../components/History'
import PurchasePoints from '../components/PurchasePoints'
import useHistory from '../Hooks/useHistory'
import userContext from '../context/UserContext'
import { useState, useContext } from 'react'

function RedeemHistory({ setIsVisible }) {
  const { user } = useContext(userContext)
  const [page, setPage] = useState(0)
  const { history, topValue } = useHistory(user.redeemHistory, page)

  return (
    <main className='py-14 px-[6.5rem] flex gap-16'>
      <div className='w-4/5 flex flex-col'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-semibold mb-4'>Redeem History</h1>
          <img
            src='../../public/arrow-left.svg'
            onClick={() => {
              setPage(page - 1)
            }}
            className={page > 0 ? 'h-[2.4rem] cursor-pointer' : 'hidden'}
          />
          <img
            src='../public/arrow-right.svg'
            onClick={() => {
              page < topValue && setPage(page + 1)
            }}
            className={
              page < topValue ? 'h-[2.4rem] cursor-pointer' : 'opacity-0'
            }
          />
        </div>
        {history.length != 0 ? (
          <History history={history} />
        ) : (
          <span>
            Go{' '}
            <b
              className='text-[#14caf7c3] cursor-pointer'
              onClick={() => {
                setIsVisible(false)
              }}
            >
              back
            </b>{' '}
            and purchase products to make a redeem history
          </span>
        )}
      </div>
      <PurchasePoints />
    </main>
  )
}

export default RedeemHistory
