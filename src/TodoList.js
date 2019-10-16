import React, { Component } from 'react';
import store from './store'
import {inputAction,addItemAction,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        // 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。你可以在回调函数里调用 getState() 来拿到当前 state。
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.clickBtn = this.clickBtn.bind(this)
    }
    
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                value={this.state.value}
                clickBtn={this.clickBtn}
                list={this.state.list}
                clickItem={this.clickItem}
            />
         );
    }
    changeInputValue(e){
        const action =  inputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        // 分发 action。这是触发 state 变化的惟一途径。
        store.dispatch(action)
    }
    clickItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;