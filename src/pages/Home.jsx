import Loader from '../components/Loader'
import ProductsList from '../components/ProductsList'
import useProducts from '../Hooks/useProducts'
import { useState } from 'react'

const sortOptions = [
  { label: 'Most recent', value: 'Most_recent' },
  { label: 'Lowest price', value: 'Lowest_first' },
  { label: 'Highest price', value: 'Highest_first' },
]

function Home({ setIsVisible }) {
  const [order, setOrder] = useState('Most_recent')
  const [page, setPage] = useState(true)
  const { products } = useProducts(order, page)

  const ifIsActive = (active, currentValue) => {
    if (active == currentValue) {
      return 'bg-[#0dd4fa] text-white rounded-2xl px-4 py-1 cursor-default'
    } else {
      return 'bg-[#ededed] rounded-2xl px-4 py-1 hover:bg-[#e8e8e8] cursor-pointer'
    }
  }

  return (
    <main className='py-14 px-[6.5rem]'>
      {products.length ? (
        <div>
          <div className='flex'>
            <div className='text-lg flex gap-5 basis-[99%]'>
              <span className='text-[#696969] font-medium'>
                {page ? 16 : 32} of 32 products
              </span>
              <div className='text-[#adadad] flex gap-5'>
                <div className='h-7 w-[.09px] inline-block' />
                <span>Sort by:</span>
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setOrder(option.value)
                      !page && setPage(!page)
                    }}
                    className={ifIsActive(order, option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <img
              src='../public/arrow-left.svg'
              onClick={() => {
                setPage(true)
              }}
              className={page == false ? 'h-[2.4rem] cursor-pointer' : 'hidden'}
            />
            <img
              src='../public/arrow-right.svg'
              onClick={() => {
                setPage(false)
              }}
              className={page == true ? 'h-[2.4rem] cursor-pointer' : 'hidden'}
            />
          </div>
          <ProductsList
            products={products}
            setIsVisible={setIsVisible}
          />
          <span className='text-[#696969] font-medium'>
            {page ? 16 : 32} of 32 products
          </span>
        </div>
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default Home
