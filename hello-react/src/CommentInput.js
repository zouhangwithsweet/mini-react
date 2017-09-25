import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            content: ''
        }
    }
    componentDidMount() {
        // this.textarea.focus()
        // window.onkeydown = e => {
        //     if (e.keyCode === 13) {
        //         this.handleSubmit()
        //     }
        // }
    }
    componentWillMount() {
        this._loadUserName()
    }
    _saveUserName(username) {
        localStorage.setItem('username', username)
    }
    _loadUserName() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({userName: username})
        }
    }
    handleUserNameBlur(event) {
        this._saveUserName(event.target.value)
    }
    handleUserNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
    }
    handleSubmit () {
        if (this.props.onSubmit) {
          const { userName, content } = this.state
          this.props.onSubmit({
              userName, 
              content,
              createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.userName}
                            onBlur={this.handleUserNameBlur.bind(this)}
                            onChange={this.handleUserNameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        ref={button => this.button = button}
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
