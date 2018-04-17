import React, { Component } from 'react'
import MusicItem from '../components/musicItem/musicItem'

class MusicList extends Component {
    static defaultProps = {
        progress: 9527,
        barColor: '#2f9842'
    }

    render() {
        let listEle = null
        listEle = this.props.musicList.map(item =>  {
            return <MusicItem
                focus={item === this.props.currentMusicItem}
                key={item.id} musicItem={item} />
        })
        return(
            <ul>
                {listEle}
            </ul>
        )
    }
}

export default MusicList
