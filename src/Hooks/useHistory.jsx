import { useState, useEffect, useCallback, useRef } from 'react'

function useHistory(arrayHistory, page) {
  const [history, setHistory] = useState([])
  let historyRef = useRef([])

  const divideArray = useCallback((array) => {
    const result = []
    let i = 0
    const length = array.length

    while (i < length) {
      result.push(array.slice(i, i + 12))
      i += 12
    }
    historyRef.current = result
    return result
  }, [])

  useEffect(() => {
    setHistory(divideArray(arrayHistory).slice(page, 1)[0])
  }, [])

  useEffect(() => {
    setHistory([...historyRef.current].slice(page, page + 1)[0])
  }, [page])

  return { history, topValue: historyRef.current.length-1 }
}

export default useHistory
