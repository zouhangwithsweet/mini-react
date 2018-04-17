import React, {Component} from 'react'
import Header from './components/header/header.js'
import Player from './page/player'
import MusicList from './page/musiclist'
import {MUSIC_LIST} from './config/musiclist'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            musicList: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[0]
        }
    }

    prevHandle() {
        let _index = this.state.index
        if (_index === 0) {
            this.setState({
                index: 0,
                currentMusicItem: MUSIC_LIST[0]
            })
        } else {
            _index = _index - 1
            this.setState({
                index: _index,
                currentMusicItem: MUSIC_LIST[_index]
            })
        }
    }

    nextHandler() {
        let _index = this.state.index
        if (_index === MUSIC_LIST.length - 1) {
            this.setState({
                index: 0,
                currentMusicItem: MUSIC_LIST[0]
            })
        } else {
            _index = _index + 1
            this.setState({
                index: _index,
                currentMusicItem: MUSIC_LIST[_index]
            })
        }
    }

    render() {
        return (
            <div>
                <Player prev={this.prevHandle.bind(this)} next={this.nextHandler.bind(this)} currentMusicItem={this.state.currentMusicItem}></Player>
            </div>
        )
    }
}

class List extends Component {
    constructor() {
        super()
        this.state = {
            musicList: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[1]
        }
    }

    render() {
        return (
            <MusicList
                    currentMusicItem = {this.state.currentMusicItem}
                    musicList = {this.state.musicList}></MusicList>
        )
    }
}

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <Route exact path="/" component={App}>
                    </Route>
                    <Route path="/list" component={List}></Route>
                </div>
            </Router>
        )
    }
}

export default Root
