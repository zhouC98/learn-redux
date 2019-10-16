import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

export const inputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = (value)=>({
    type:ADD_ITEM,
    
})
export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})