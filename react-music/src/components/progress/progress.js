import React, { Component } from 'react'
import './progress.styl'

class Progress extends Component {
    static defaultProps = {
        progress: 9527,
        barColor: '#2f9842'
    }

    constructor() {
        super()
        this.state = {isLiked: false}
    }

    changePorgress(e) {
        const progressBar = this.refs.progressBar
        const progress = (e.clientX - progressBar.getBoundingClientRect().left) /
            progressBar.clientWidth
        if (this.props.onProgressChange) this.props.onProgressChange(progress)
    }

    render() {
        return (
            <div className="component-progress"
                ref="progressBar"
                onClick={this.changePorgress.bind(this)}>
                <div className="progress"
                    style={{width: `${this.props.progress}%`, background:`${this.props.barColor}`}}></div>
            </div>
        )
    }
}

export default Progress
