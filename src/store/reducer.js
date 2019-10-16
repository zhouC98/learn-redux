import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState = {
    value:'',
    inputValue:'Write Something',
    list:[
        '吃饭',
        '睡觉',
        '敲代码'
    ]
}
// store必须是唯一的，多个store是坚决不允许，只能有一个store空间
// 只有store能改变自己的内容，Reducer不能改变
// Reducer必须是纯函数
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.value = action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.value)
        newState.value = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}