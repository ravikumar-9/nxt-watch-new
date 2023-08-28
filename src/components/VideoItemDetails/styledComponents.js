import styled from 'styled-components'

export const SpecificVideoSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
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
  color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
`

export const HomeFailureDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
`

export const RetryButton = styled.button`
  height: 30px;
  width: 90px;
  border: none;
  background-color: #3b82f6;
  font-weight: bold;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
  margin-top: 12px;
  border-radius: 3px;
`
export const SavedVideosBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    width: 85%;
    margin-left: 15%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  height: 10vh;
  position: fixed;
`
export const SavedVideosHeading = styled.h1`
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`

export const BannerLogoContainer = styled.div`
  background-color: '#cbd5e1';
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
`

export const SpecificVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 85%;
    margin-left: 15%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
`
