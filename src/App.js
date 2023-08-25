import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import WatchContext from './context/WatchContext'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Trending from './components/Trending'

import VideoItemDetails from './components/VideoItemDetails'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import Login from './components/Login'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <WatchContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme, savedVideosList}}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
