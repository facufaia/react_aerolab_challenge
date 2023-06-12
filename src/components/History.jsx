function History({ history }) {

  return (
    <ul className='grid grid-cols-4'>
      {history.map((product) => {
        const { createDate, img, cost, name } = product
        return (
          <li key={createDate} className='list-none mb-3'>
            <img src={img.url} />
            <div className='py-2 mx-6 border-t text-[#696969]'>
              <span className='text-[#c3c3c3] block'>{name}</span>
              <div className='flex justify-between text-sm'>
                <span>{createDate.slice(0, 10)}</span>
                <div>
                  <span>{cost}</span>
                  <img src='../assets/coin.svg' className='inline w-5' />
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default History
