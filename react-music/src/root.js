import React, { Component } from 'react'
import Header from './components/header/header.js'
import Player from './page/player'
import MusicList from './page/musiclist'
import { MUSIC_LIST } from './config/musiclist'
import { observable } from 'mobx'

let currentSong = observable(MUSIC_LIST[0])

import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom'

class App extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            musicList: MUSIC_LIST,
            currentMusicItem: currentSong
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
            currentSong = observable(MUSIC_LIST[_index])
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
            currentSong = observable(MUSIC_LIST[_index])
        }
    }

    render() {
        return (
            <div>
                <Player
                    prev={this.prevHandle.bind(this)}
                    next={this.nextHandler.bind(this)}
                    currentMusicItem={this.state.currentMusicItem}>
                </Player>
            </div>
        )
    }
}

class List extends Component {
    constructor() {
        super()
        this.state = {
            musicList: MUSIC_LIST,
            currentMusicItem: currentSong
        }
    }

    render() {
        return (
            <MusicList
                currentMusicItem = {this.state.currentMusicItem}
                musicList = {this.state.musicList}>
            </MusicList>
        )
    }
}

const Root = () => (
    <Router>
        <div>
            <Header></Header>
            <Switch>
                <Route exact path="/player" component={App}></Route>
                <Route exact path="/list" component={List}></Route>
                <Redirect to="/player"></Redirect>
            </Switch>
        </div>
    </Router>
)

export default Root
