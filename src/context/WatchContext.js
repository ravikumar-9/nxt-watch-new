import React from 'react'

const WatchContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
})

export default WatchContext
