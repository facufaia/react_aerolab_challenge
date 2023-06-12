import {
  getUser,
  postPurchase,
  postPoints,
} from './handle_endpoints'

export const handleUserSession = async (setUser) => {
  const { name, redeemHistory, points } = await getUser()
  setUser({ name, redeemHistory, points })
}

export const handleProductCheckout = async (
  stateUser,
  setIsVisible,
  cost,
  productId
) => {
  const newPointsValue = stateUser.user.points - cost

  if (newPointsValue < 0) {
    setIsVisible(false)
  } else {
    const message = await postPurchase(stateUser, productId, newPointsValue)
    console.log(message)
  }
} //NEED FEEDBACK FOR THE USER

export const handlePurhasePoints = async (stateUser, amount) => {
  const { message, newPoints } = await postPoints(stateUser, amount)
  console.log({message, newPoints})
} //NEED FEEDBACK FOR THE USER