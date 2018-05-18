import React, {Component} from 'react'
import Progress from '../components/progress/progress'
import './player.styl'
import { Link } from 'react-router-dom'
class Player extends Component {
    constructor() {
        super()
        this.state = {
            progress: 0,
            isPlaying: false,
            volume: 0,
            time: '0:00',
            imgStyle: {
                animation: 'change 6s linear infinite'
            }
        }
    }

    componentDidMount() {
        this.ava.style.animationPlayState = "paused"
        this.audio.addEventListener('canplay', () => {
            if (this.state.isPlaying === true) this.audio.play()
            if (this.state.isPlaying === false) {
                this.setState({
                    isPlaying: false,
                    volume: this.audio.volume * 100
                })
            }
        })
        this.audio.addEventListener('timeupdate', e => {
            this.setState({
                progress: e.target.currentTime / this.audio.duration * 100,
                time: this.format(e.target.currentTime)
            })
        })
    }

    pause() {
        if (this.state.isPlaying === false) {
            this.audio.play()
            this.setState({
                isPlaying: true
            })
            this.ava.style.animationPlayState = "running"
        } else {
            this.audio.pause()
            this.setState({
                isPlaying: false
            })
            this.ava.style.animationPlayState = "paused"
        }
    }

    format(interval) {
        interval = interval | 0
        const minute = interval / 60 | 0
        const second = this._pad(interval % 60)
        return `${minute}:${second}`
    }

    _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
            num = '0' + num
            len ++
        }
        return num
    }
    progressChangeHandler(num) {
        this.audio.currentTime = this.audio.duration * num
        this.audio.play()
        this.setState({
            isPlaying: true
        })
    }

    voiceChangeHandler(num) {
        this.audio.volume = num
        this.setState({
            volume: this.audio.volume * 100
        })
    }

    prev() {
        if (this.props.prev) this.props.prev()
    }

    next() {
        if (this.props.next) this.props.next()
    }

    render() {
        return (
            <div>
                <audio ref={audio => this.audio = audio} src={this.props.currentMusicItem.file}></audio>
                <div className="player-page">
                    <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                    <div className="mt20 row">
                        <div className="controll-wrapper">
                            <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                            <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                            <div className="row mt20">
                                <div className="left-time -col-auto">{this.state.time}</div>
                                <div className="volume-container">
                                    <i className="icon-volume rt" style={{top:5}}></i>
                                    <div className="volume-wrapper" style={{marginLeft: "5px"}}>
                                        <Progress progress={this.state.volume}
                                            barColor = "#aaa"
                                            onProgressChange={this.voiceChangeHandler.bind(this)}>
                                        </Progress>
                                    </div>
                                </div>
                            </div>
                            <div style={{height:10,lineHeight:'10px', marginTop: '20px'}}>
                                <Progress progress={this.state.progress}
                                    onProgressChange={this.progressChangeHandler.bind(this)}>
                                </Progress>
                            </div>
                            <div className="mt35 row">
                                <div>
                                    <i className="icon prev" onClick={this.prev.bind(this)}></i>
                                    <i className={`icon ml20 ${this.state.isPlaying?'pause':'play'}`} onClick={this.pause.bind(this)}></i>
                                    <i className="icon next ml20" onClick={this.next.bind(this)}></i>
                                </div>
                                <div className="-col-auto">
                                    <i className="icon repeat-cycle"></i>
                                </div>
                            </div>
                        </div>
                        <div className="-col-auto cover">
                            <img ref={ava => this.ava = ava} style={this.state.imgStyle} src={this.props.currentMusicItem.cover}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player
