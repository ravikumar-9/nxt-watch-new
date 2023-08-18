import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import Home from './components/Home'

import NotFound from './components/NotFound'

import Login from './components/Login'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <WatchContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
