import { useEffect, useState, useContext } from 'react'
import RedeemHistory from './pages/HistoryRedeem'
import Home from './pages/Home'
import userContext from './context/UserContext'
import { handleUserSession } from './services/handle_api'
import './index.css'

function App() {
  const { user, setUser} = useContext(userContext)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    handleUserSession(setUser)
  }, [])

  return (
    <>
      <header className='w-full'>
        <div className='flex justify-end w-full my-[.89rem] px-[2.1rem] text-lg'>
          <img
            src='./assets/logo.svg'
            className={`h-7 ${!isVisible && 'cursor-pointer'}`}
            onClick={() => {
              setIsVisible(true)
            }}
          />
          <div className='basis-[99%] flex justify-end items-center gap-3 text-[#838383]'>
            <span className='text-xl'>{user && user.name}</span>
            <div
              onClick={() => {
                setIsVisible(!isVisible)
              }}
              className='rounded-3xl gap-1 flex px-2.5 py-1 items-center bg-[#ededed] cursor-pointer hover:bg-[#e8e8e8]'
            >
              <span className='text-base'>{user.points}</span>
              <img src='./assets/coin.svg' className='h-7' />
            </div>
          </div>
        </div>
        <div className='relative'>
          <img src='./assets/header.png' className='object-' />
          <span className='absolute bottom-[3.2rem] left-[6.5rem] text-white text-5xl font-bold'>
            Electronics
          </span>
        </div>
      </header>
      {isVisible && user ? (
        <Home setIsVisible={setIsVisible} />
      ) : (
        <RedeemHistory
          setIsVisible={setIsVisible}
        />
      )}
    </>
  )
}

export default App
