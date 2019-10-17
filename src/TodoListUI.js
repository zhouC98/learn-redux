import React, { Fragment } from 'react';
import { Input,Button,List } from 'antd'
import 'antd/dist/antd.css'
const TodoListUI = (props) => {
    return (
        <div style={{margin:'300px '}}> 
            <div>
                <Input 
                    placeholder={props.inputValue}
                    style={{width:'250px'}}
                    onChange={props.changeInputValue}
                    value={props.value}
                />
                <Button 
                    type="primary" 
                    style={{margin:'10px'}}
                    onClick={props.clickBtn}
                >添加</Button>
            </div>
            <div style={{marginTop:'10px',width:"300px"}}>
                <Fragment>
                    <List 
                        bordered
                        dataSource={props.list}
                        renderItem={
                            (item,index) => (
                                <List.Item 
                                    onClick={() => {
                                        props.clickItem(index)
                                    }
                                }>{item}</List.Item>)
                        }
                    />
                </Fragment>
            </div>
        </div>
    )
}
// class TodoListUI extends Component {
//     render() { 
//         return ( 
//         <div style={{margin:'300px '}}> 
//             <div>
//                 <Input 
//                     placeholder={this.props.inputValue}
//                     style={{width:'250px'}}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.value}
//                 />
//                 <Button 
//                     type="primary" 
//                     style={{margin:'10px'}}
//                     onClick={this.props.clickBtn}
//                 >添加</Button>
//             </div>
//             <div style={{marginTop:'10px',width:"300px"}}>
//                 <Fragment>
//                     <List 
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={
//                             (item,index) => (
//                                 <List.Item 
//                                     onClick={() => {
//                                         this.props.clickItem(index)
//                                     }
//                                 }>{item}</List.Item>)
//                         }
//                     />
//                 </Fragment>
//             </div>
//         </div>
//          );
//     }
// }
  
export default TodoListUI;