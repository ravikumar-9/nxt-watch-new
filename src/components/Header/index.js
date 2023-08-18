import WatchContext from '../../context/WatchContext'

import {
  HeaderSection,
  WebsiteLogo,
  IconsContainer,
  LogoutButton,
} from './styledComponents'

const Header = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onChangeTheme = () => {
        changeTheme()
      }

      return (
        <>
          <HeaderSection theme={isDarkTheme}>
            {isDarkTheme ? (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="watch logo"
              />
            ) : (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="watch logo"
              />
            )}
            <IconsContainer>
              <LogoutButton type="button" onClick={onChangeTheme}>
                Logout
              </LogoutButton>
            </IconsContainer>
          </HeaderSection>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default Header
