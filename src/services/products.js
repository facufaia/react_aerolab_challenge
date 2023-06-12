export const handleSort = (sortValue, ref) => {
    const catalogue = ref.current
    if (sortValue == 'Most_recent') {
      return [...catalogue]
    } else if (sortValue == 'Lowest_first') {
      return [...catalogue].sort((a, b) => a.cost - b.cost)
    } else {
      return [...catalogue].sort((a, b) => b.cost - a.cost)
    }
}
  
export const handlePagination = (products, page) => {
    if (page == true) {
      return [...products].slice(0, 16)
    } else {
      return [...products].slice(16)
    }
}