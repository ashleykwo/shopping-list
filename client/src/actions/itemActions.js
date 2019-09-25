export const getItems = () => {
  return {
    type: "GET_ITEMS"
  }
}

export const addItem = item => {
  return {
    type : "ADD_ITEM",
    payload : item
  }
}

export const deleteItem = id => {
  return {
    type : "DELETE_ITEM",
    payload: id
  }
}