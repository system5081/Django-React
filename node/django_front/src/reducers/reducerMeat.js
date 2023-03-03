import{SELL_MEAT} from './actionTypes'

const reducerMeat = (state=[],action) => {
    switch(action.type){
        case SELL_MEAT:return{
            ...state,
            numOfMeat:state.numOfMeat-1
        }
        default:return state
    }
  return (
    <div>
      
    </div>
  )
}

export default reducerMeat
