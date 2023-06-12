import { apiKey, apiPaths } from '../var_enviroment'

const {
  pathGetUser,
  pathGetHistory,
  pathGetProducts,
  pathPostPoints,
  pathPostPurchase,
} = apiPaths

export const getUser = async () => {
  const res = await fetch(pathGetUser, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  })
  const data = await res.json()
  return data
}

export const getHistory = async () => {
  const res = await fetch(pathGetHistory, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  })
  const data = await res.json()
  return data
}

export const getProducts = async () => {
  try {
    const res = await fetch(pathGetProducts, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    const data = await res.json()
    if (res.status == 200) {
      return data
    }
  } catch (error) {
    console.log(error)
  }
} //NEED HANDLE ERRORS

export const postPoints = async (stateUser, amount) => {
  const { user, setUser } = stateUser

  try {
    const res = await fetch(pathPostPoints, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ amount: amount }),
    })
    const data = await res.json()
    if (res.status == 200) {
      const { message, 'New Points': newPoints } = data
      setUser({ ...user, points: newPoints })
      return { message, newPoints }
    }
  } catch (error) {
    console.log(error)
  }
} //NEED HANDLE ERRORS

export const postPurchase = async (stateUser, productId, newPointsValue) => {
  const { user, setUser } = stateUser
  try {
    const res = await fetch(pathPostPurchase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ productId: productId }),
    })
    const data = await res.json()
    if (res.status == 200) {
      setUser({ ...user, points: newPointsValue })
      return data
    }
  } catch (error) {
    console.log(error)
  }
} //NEED HANDLE ERRORS
