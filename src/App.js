import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'

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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
