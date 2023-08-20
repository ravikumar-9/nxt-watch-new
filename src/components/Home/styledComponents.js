import styled from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.theme === true ? ' #181818' : '#f9f9f9')};
`

export const HomeSectionMainContainer = styled.div`
  width: 85%;
`

export const SearchBar = styled.input`
  width: 50%;
  border: none;
  height: 30px;
  font-weight: bold;
  font-size: 14px;
`

export const HomeSectionVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`

export const HomeFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const HomeFailureImage = styled.img`
  height: 200px;
  width: 270px;
  margin-bottom: 13px;
`

export const HomeFailureHeading = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const HomeFailureDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const RetryButton = styled.button`
  height: 30px;
  width: 90px;
  border: none;
  background-color: #3b82f6;
  font-weight: bold;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  margin-top: 12px;
  border-radius: 3px;
`

export const SearchbarContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`
export const SearchIcon = styled.button`
  height: 30px;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
`
