import { SELL_VEGETABLE } from "./actionTypes"

const reducerVegetable = (state={},action) => {
    switch(action.type){
        case SELL_VEGETABLE:return{
            ...state,
            numOfVegetable:state.numOfVegetable -1
        }
        default :return state;
    }
  return (
    <div>
      
    </div>
  )
}

export default reducerVegetable
