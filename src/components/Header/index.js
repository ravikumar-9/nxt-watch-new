import {Link} from 'react-router-dom'

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
              <>
                <Link to="/">
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              </>
            ) : (
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}
            <IconsContainer>
              <LogoutButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
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
