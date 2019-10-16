import React, { Component } from 'react';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width:'250px'}}
                        onChange={this.changeInputValue}
                        value={this.state.value}
                    />
                    <Button 
                        type="primary" 
                        style={{margin:'10px'}}
                        onClick={this.clickBtn}
                    >添加</Button>
            </div>
        );
    }
}
 
export default Todo;