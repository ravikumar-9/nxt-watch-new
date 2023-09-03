import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'

import {CgClose} from 'react-icons/cg'

import WatchContext from '../../context/WatchContext'

import VideoItem from '../VideoItem'

import {
  HomeSectionContainer,
  HomeSectionMainContainer,
  HomeSectionVideosContainer,
  SearchBar,
  HomeFailureViewContainer,
  HomeFailureImage,
  HomeFailureHeading,
  HomeFailureDescription,
  RetryButton,
  SearchbarContainer,
  SearchIcon,
  VideosList,
  BannerContainer,
  LogoContainer,
  BannerLogo,
  BannerDescription,
  BannerGetNowButton,
  CloseButton,
} from './styledComponents'

import Header from '../Header'

import Sidebar from '../Sidebar'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getHomeSectionVideos()
  }

  getHomeSectionVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const fetchedResponse = await fetch(url, options)

    if (fetchedResponse.ok === true) {
      const fetchedData = await fetchedResponse.json()

      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        channel: eachVideo.channel,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        homeVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderHomeLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  getHomeNoVideosView = isDarkTheme =>
    isDarkTheme ? (
      <>
        <HomeFailureViewContainer>
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <HomeFailureHeading theme={isDarkTheme}>
            No Search results found
          </HomeFailureHeading>
          <HomeFailureDescription theme={isDarkTheme}>
            Try different key words or remove search filter
          </HomeFailureDescription>
          <RetryButton type="button" onClick={this.onRetry} theme={isDarkTheme}>
            Retry
          </RetryButton>
        </HomeFailureViewContainer>
      </>
    ) : (
      <HomeFailureViewContainer>
        <HomeFailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <HomeFailureHeading theme={isDarkTheme}>
          No Search results found
        </HomeFailureHeading>
        <HomeFailureDescription theme={isDarkTheme}>
          Try different keywords or remove search filter
        </HomeFailureDescription>
        <RetryButton onClick={this.onRetry} theme={isDarkTheme}>
          Retry
        </RetryButton>
      </HomeFailureViewContainer>
    )

  renderHomeSuccessView = isDarkTheme => {
    console.log(isDarkTheme)
    const {homeVideosList} = this.state
    const showHomeVideos = homeVideosList.length === 0
    return showHomeVideos ? (
      this.getHomeNoVideosView(isDarkTheme)
    ) : (
      <VideosList theme={isDarkTheme}>
        {homeVideosList.map(eachVideo => (
          <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideosList>
    )
  }

  onRetry = () => {
    this.setState({searchInput: ''})
    this.getHomeSectionVideos()
  }

  renderHomeFailureView = isDarkTheme => (
    <>
      <HomeFailureViewContainer>
        {isDarkTheme ? (
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure view"
          />
        ) : (
          <HomeFailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
        )}
        <HomeFailureHeading theme={isDarkTheme}>
          Oops! Something Went Wrong
        </HomeFailureHeading>
        <HomeFailureDescription theme={isDarkTheme}>
          We are having some trouble to complete your request.Please try again.
        </HomeFailureDescription>
        <RetryButton type="button" onClick={this.onRetry} theme={isDarkTheme}>
          Retry
        </RetryButton>
      </HomeFailureViewContainer>
    </>
  )

  onClickSearchIcon = () => {
    this.getHomeSectionVideos()
  }

  renderSwitchCases = isDarkTheme => {
    const {apiStatus} = this.state

    console.log(apiStatus)

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderHomeLoader()

      case apiStatusConstants.failure:
        return this.renderHomeFailureView(isDarkTheme)

      case apiStatusConstants.success:
        return this.renderHomeSuccessView(isDarkTheme)
      default:
        return null
    }
  }

  onRemoveBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    const {searchInput, showBanner} = this.state

    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeSectionContainer theme={isDarkTheme} data-testid="home">
                <Sidebar />
                <HomeSectionMainContainer>
                  <BannerContainer banner={showBanner} data-testid="banner">
                    <LogoContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <CloseButton
                        onClick={this.onRemoveBanner}
                        data-testid="close"
                      >
                        <CgClose size={24} />
                      </CloseButton>
                    </LogoContainer>
                    <BannerDescription>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerDescription>
                    <BannerGetNowButton>GET IT NOW</BannerGetNowButton>
                  </BannerContainer>
                  <SearchbarContainer>
                    <SearchBar
                      type="search"
                      onChange={this.onChangeSearchInput}
                      placeholder="Search"
                      value={searchInput}
                    />
                    <SearchIcon
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchIcon}
                    >
                      <BiSearch size={20} />
                    </SearchIcon>
                  </SearchbarContainer>
                  <HomeSectionVideosContainer>
                    {this.renderSwitchCases(isDarkTheme)}
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

export default Home
