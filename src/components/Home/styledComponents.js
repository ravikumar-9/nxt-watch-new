import styled from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${props => (props.theme === true ? ' #181818' : '#f9f9f9')};
`

export const HomeSectionMainContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const SearchBar = styled.input`
  @media screen and (min-width: 768px) {
    width: 50%;
    border: none;
    height: 30px;
    font-weight: bold;
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    border: none;
    height: 30px;
    font-weight: bold;
    font-size: 14px;
  }
`

export const HomeSectionVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 30px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    position: fixed;
    right: 0;
    left: 0;
  }
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

export const VideosList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    justify-content: space-between;
    margin-right: 70px;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${props =>
      props.theme === true ? ' #181818' : '#f9f9f9'};
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    list-style-type: none;
    background-color: ${props =>
      props.theme === true ? ' #181818' : '#f9f9f9'};
  }
`
