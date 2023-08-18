import React from 'react'

const WatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default WatchContext
