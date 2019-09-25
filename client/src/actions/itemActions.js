export const getItems = () => {
  return {
    type: "GET_ITEMS"
  }
}

export const addItem = () => {
  return {
    type : "ADD_ITEM"
  }
}

export const deleteItem = id => {
  return {
    type : "DELETE_ITEM",
    playload: id
  }
}