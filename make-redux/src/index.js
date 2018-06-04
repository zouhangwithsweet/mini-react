// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const appState ={
    title: {
        text: 'React.js 小书',
        color: 'red'
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) return
    console.log('render app....')
    renderTitle(newAppState.title)
    renderContent(newAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
    console.log('render title....')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
    console.log('render content....')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

function createStore(state, stateChanger) {
    const listeners = []
    const subscribe = listener => listeners.push(listener)
    const getState = () => state
    const dispatch = action => {
        stateChanger(state, action)
        listeners.forEach(listener => listener())
    }
    return { getState, dispatch, subscribe}
}

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break;
        default:
            break;
    }
}
const store = createStore(appState, stateChanger)
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
})

renderApp(appState)// 首次渲染

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: '#666' }) // 修改标题颜色

setTimeout(() => {
    store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书666》' })
}, 2000);

// function flatten(arr) {
//     let _arr = []
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             _arr = _arr.concat(flatten(item))
//         } else {
//             _arr.push(item)
//         }
//     })
//     return _arr
// }