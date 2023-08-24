import {Component} from 'react'

import Cookies from 'js-cookie'

import {SpecificVideoSection} from './styledComponents'

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
      console.log(fetchedSpecificVideoData)
      this.setState({
        specificVideoDetails: fetchedSpecificVideoData,
        specificApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({specificApiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <SpecificVideoSection>
        {this.renderSpecificVideoSwitchCases()}
      </SpecificVideoSection>
    )
  }
}

export default VideoItemDetails
