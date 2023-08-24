import {Link} from 'react-router-dom'

import {TiWeatherNight} from 'react-icons/ti'

import WatchContext from '../../context/WatchContext'

import {
  HeaderSection,
  WebsiteLogo,
  IconsContainer,
  LogoutButton,
  ThemeButton,
  ProfileImage,
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
              {isDarkTheme ? (
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  <TiWeatherNight size={40} color="blue" />
                </ThemeButton>
              ) : (
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  <TiWeatherNight size={40} />
                </ThemeButton>
              )}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutButton type="button">Logout</LogoutButton>
            </IconsContainer>
          </HeaderSection>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default Header
