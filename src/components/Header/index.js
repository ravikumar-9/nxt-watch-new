import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {TiWeatherNight} from 'react-icons/ti'

import WatchContext from '../../context/WatchContext'

import {
  HeaderSection,
  WebsiteLogo,
  IconsContainer,
  LogoutButton,
  ThemeButton,
  ProfileImage,
  PopupContainer,
  PopupDescription,
  ConfirmButton,
  CancelButton,
  LogoutButtonsContainer,
} from './styledComponents'

const Header = props => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onChangeTheme = () => {
        changeTheme()
      }
      const {history} = props

      const onLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
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
              <PopupContainer>
                <Popup
                  modal
                  trigger={<LogoutButton type="button">Logout</LogoutButton>}
                >
                  {close => (
                    <>
                      <div>
                        <PopupDescription>
                          Are you sure, you want to logout
                        </PopupDescription>
                      </div>
                      <LogoutButtonsContainer>
                        <CancelButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </ConfirmButton>
                      </LogoutButtonsContainer>
                    </>
                  )}
                </Popup>
              </PopupContainer>
            </IconsContainer>
          </HeaderSection>
        </>
      )
    }}
  </WatchContext.Consumer>
)

export default withRouter(Header)
