import React, { Component } from 'react'
import styled from 'styled-components'
const Input = styled.input`
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: .5rem;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    outline: none;
    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .1)
    }
`

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        this.timer = setInterval(() => {
          this.setState({
              date: new Date()
          })
        }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return(
            <div>
                <h1>
                    <Input placeholder={'我是占位'}></Input>
                    <p>
                        现在时间不是
                    </p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock