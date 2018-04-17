import React, { Component } from 'react'
import './musicItem.styl'
class MusicItem extends Component {
    render() {
        let musicItem = this.props.musicItem
        return (
            <li className={`component-listitem row ${this.props.focus ? 'focus' : ''}`}>
                <p><strong>{musicItem.title}</strong>-{musicItem.artist}</p>
                <p className="-col-auto delete">-</p>
            </li>
        )
    }
}

export default MusicItem
