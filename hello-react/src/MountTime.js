import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        console.log('construct')
    }

    componentWillMount() {
        console.log('将要挂载')
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillUnmount() {
        console.log('component will Unmount')
    }

    render() {
        console.log('render')
        return(
            <div>
                <h1 className="title">React 小书</h1>
            </div>
        )
    }
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render() {
        return(
            <div>
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
                </button>
            </div>
        )
    }
}

export default Index