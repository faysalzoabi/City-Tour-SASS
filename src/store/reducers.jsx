
import {ADD_DATA, REMOVE_DATA} from './action'

const initState = {
    tours:[]
}
const reducer = (state= initState, action ) => {
    console.log('in reducer', action.type, action.payload)
    switch(action.type){
        case ADD_DATA:
            let newTours = []
            action.payload.forEach(item => {
                const singleitem = {...item}
                newTours = [...newTours, singleitem]
            })
            console.log('in reducer', newTours);
            return{
                ...state,
                tours:newTours
            }
        case REMOVE_DATA:
            let tempTours = []
            tempTours = state.tours.filter(tour => tour.id !== action.payload)
            console.log('temptours',tempTours);
            return{
                ...state,
                tours:[...tempTours]
            }
        default:
            return state

    }
    
}
export default reducer;