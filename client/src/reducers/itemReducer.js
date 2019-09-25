import uuid from 'uuid';

const initialState = {
  items : [
    { id: uuid.v4(), name : 'steak'},
    { id: uuid.v4(), name : 'chicken'},
    { id: uuid.v4(), name : 'eggs'}
  ]
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS" :
      return {...state};
    case "ADD_ITEM" :
      return {
        ...state,
        items : [...state.items, action.payload]
      };
    case "DELETE_ITEM" : 
      return {
        ...state,
        items : state.items.filter(item => item.id !== action.payload)
      };
    default :
      return {...state};
  }
}

export default itemReducer;