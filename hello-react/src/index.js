import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CommentApp from './CommentAPP'
import MountTime from './MountTime'
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowClock: true
        }
    }

    handlerShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    render() {
        return(
            <div>
                {this.state.isShowClock ? <Clock></Clock> : null }
                <button onClick={this.handlerShowOrHide.bind(this)}>切换</button>
            </div>
        )
    }
}
// const users = [
//     { username: 'Jerry', age: 21, gender: 'male' },
//     { username: 'Tomy', age: 22, gender: 'male' },
//     { username: 'Lily', age: 19, gender: 'female' },
//     { username: 'Lucy', age: 20, gender: 'female' }
// ]
// class LikeButton extends Component {
//     static defaultProps = {
//         likedText: '取消',
//         unlikedText: '点赞'
//     }
//     constructor () {
//         super()
//         this.state = { isLiked: false }
//     }
    
//     handleClickOnLikeButton () {
//         this.setState({ // setState是异步
//             isLiked: !this.state.isLiked
//         })
//         if (this.props.onClick) {
//             this.props.onClick()
//         }
//     }
    
//     render () {
//         const likedText = this.props.likedText || '取消'
//         const unlikedText = this.props.unlikedText || '点赞'
//         return (
//             <button onClick={this.handleClickOnLikeButton.bind(this)}>
//             {this.state.isLiked ? likedText : unlikedText} 👍
//             </button>
//         )
//     }
// }
// class Index extends Component {
//     render() {
//         return (
//             <div>{users.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <div>姓名：{item.username}</div>
//                         <div>年龄：{item.age}</div>
//                         <div>性别：{item.gender}</div>
//                         <hr/>
//                     </div>
//                 )
//             })}</div>
//         )
//     }
// }
ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
