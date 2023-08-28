import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  HomeSectionContainer,
  HomeSectionMainContainer,
  HomeSectionVideosContainer,
  HomeFailureViewContainer,
  HomeFailureImage,
  HomeFailureHeading,
  HomeFailureDescription,
  SavedVideosBanner,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedLogoAndHeadingContainer,
} from './styledComponents'

import Header from '../Header'

import Sidebar from '../Sidebar'

class SavedVideos extends Component {
  getNoSavedVideosView = isDarkTheme =>
    isDarkTheme ? (
      <>
        <HomeFailureViewContainer>
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <HomeFailureHeading theme={isDarkTheme}>
            No saved videos found
          </HomeFailureHeading>
          <HomeFailureDescription theme={isDarkTheme}>
            You can save your videos while watching them
          </HomeFailureDescription>
        </HomeFailureViewContainer>
      </>
    ) : (
      <HomeFailureViewContainer>
        <HomeFailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <HomeFailureHeading theme={isDarkTheme}>
          No saved videos found
        </HomeFailureHeading>
        <HomeFailureDescription theme={isDarkTheme}>
          You can save your videos while watching them
        </HomeFailureDescription>
      </HomeFailureViewContainer>
    )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          const noOfSavedVideos = savedVideosList.length
          return (
            <>
              <Header />
              <HomeSectionContainer
                theme={isDarkTheme}
                data-testid="savedVideos"
              >
                <Sidebar />
                <HomeSectionMainContainer>
                  <SavedVideosBanner>
                    <SavedLogoAndHeadingContainer>
                      <SavedVideosLogoContainer>h</SavedVideosLogoContainer>
                      <SavedVideosHeading theme={isDarkTheme}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedLogoAndHeadingContainer>
                  </SavedVideosBanner>
                  <HomeSectionVideosContainer>
                    {noOfSavedVideos !== 0
                      ? ''
                      : this.getNoSavedVideosView(isDarkTheme)}
                  </HomeSectionVideosContainer>
                </HomeSectionMainContainer>
              </HomeSectionContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SavedVideos
