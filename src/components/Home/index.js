import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  HomeSectionContainer,
  HomeSectionMainContainer,
  HomeSectionVideosContainer,
  SearchBar,
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
  state = {searchInput: '', apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getHomeSectionVideos()
  }

  getHomeSectionVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      Authorization: `Bearer ${jwtToken}`,
    }
    const fetchedResponse = await fetch(url, options)
    console.log(fetchedResponse)
  }

  onChangeSearchInput = event => {
    this.setState(event.target.value)
  }

  renderSwitchCases = () => <h1>h</h1>

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeSectionContainer theme={isDarkTheme}>
                <Sidebar />
                <HomeSectionMainContainer>
                  <SearchBar
                    type="search"
                    onChange={this.onChangeSearchInput}
                  />
                  <HomeSectionVideosContainer>
                    {this.renderSwitchCases()}
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
