import {tourData} from '../tourData';

export const ADD_DATA = 'addData'
export const REMOVE_DATA='removeData'

export const addData = () => {
    console.log('inaction', tourData)
    return{
        type:ADD_DATA,
        payload:tourData
    }
}


export const removeData = (id) => {
    console.log('inremoveactin',id);
    return{
        type:REMOVE_DATA,
        payload:id
    }
}