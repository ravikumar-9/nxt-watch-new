import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import Sidebar from '../Sidebar'

import WatchContext from '../../context/WatchContext'

import {
  SpecificVideoSection,
  HomeFailureViewContainer,
  HomeFailureHeading,
  HomeFailureImage,
  HomeFailureDescription,
  RetryButton,
  SpecificVideoContainer,
  VideoDescription,
  VideoViewAndLikeContainer,
  VideoViewAndDateContainer,
  LikeAndDislikeContainer,
  LikeButton,
  ViewsHeading,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    specificVideoDetails: {},
    specificApiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSpecificVideoDetails()
  }

  getSpecificVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const jwtToken = Cookies.get('jwt_token')
    const specificVideoUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const fetchedSpecificVideoResponse = await fetch(specificVideoUrl, options)
    if (fetchedSpecificVideoResponse.ok === true) {
      const fetchedSpecificVideoData = await fetchedSpecificVideoResponse.json()
      const updatedSpecificVideoData = {
        channel: fetchedSpecificVideoData.video_details.channel,
        description: fetchedSpecificVideoData.video_details.description,
        id: fetchedSpecificVideoData.video_details.id,
        title: fetchedSpecificVideoData.video_details.title,
        videoUrl: fetchedSpecificVideoData.video_details.video_url,
        viewCount: fetchedSpecificVideoData.video_details.view_count,
        publishedAt: fetchedSpecificVideoData.video_details.published_at,
        thumbnailUrl: fetchedSpecificVideoData.video_details.thumbnail_url,
      }
      console.log(updatedSpecificVideoData)
      this.setState({
        specificVideoDetails: updatedSpecificVideoData,
        specificApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({specificApiStatus: apiStatusConstants.failure})
    }
  }

  renderSpecificVideoLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  onRetry = () => {
    this.getSpecificVideoDetails()
  }

  renderSpecificVideoFailureView = isDarkTheme => (
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

  renderSpecificVideoSuccessView = isDarkTheme => {
    const {specificVideoDetails} = this.state
    const {videoUrl, description, viewCount} = specificVideoDetails

    return (
      <>
        <div className="video-container">
          <div className="responsive-container">
            <ReactPlayer url={videoUrl} controls width="98%" />
          </div>
        </div>
        <VideoDescription theme={isDarkTheme}>{description}</VideoDescription>
        <VideoViewAndLikeContainer theme={isDarkTheme}>
          <VideoViewAndDateContainer theme={isDarkTheme}>
            <ViewsHeading theme={isDarkTheme}>{viewCount} views</ViewsHeading>
          </VideoViewAndDateContainer>
        </VideoViewAndLikeContainer>
      </>
    )
  }

  renderSpecificVideoSwitchCases = isDarkTheme => {
    const {specificApiStatus} = this.state

    switch (specificApiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderSpecificVideoLoader()

      case apiStatusConstants.failure:
        return this.renderSpecificVideoFailureView(isDarkTheme)

      case apiStatusConstants.success:
        return this.renderSpecificVideoSuccessView(isDarkTheme)

      default:
        return null
    }
  }

  render() {
    const {specificVideoDetails} = this.state

    console.log(specificVideoDetails)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <SpecificVideoSection>
                <Sidebar />
                <SpecificVideoContainer theme={isDarkTheme}>
                  {this.renderSpecificVideoSwitchCases(isDarkTheme)}
                </SpecificVideoContainer>
              </SpecificVideoSection>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
