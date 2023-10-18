import styled from 'styled-components'

export const SpecificVideoSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
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
export const VideoDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  padding-left: 10px;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`
export const VideoViewAndLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  align-items: center;
  justify-content: space-between;
`

export const VideoViewAndDateContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 17%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    margin: 7px;
  }
  @media screen and (max-width: 767px) {
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    margin: 7px;
  }
`

export const LikeAndDislikeContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (max-width: 767px) {
    width: 45%;
  }
`

export const ViewsHeading = styled.p`
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 767px) {
    font-size: 9px;
  }
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`
export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 30%;
    font-size: 13px;
  }
  @media screen and (max-width: 767px) {
    width: 27%;
    font-size: 10px;
  }

  color: ${props => (props.theme === true ? '#2563eb' : '#64748b"')};
`

export const HorizontalLine = styled.hr`
  width: 98%;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelLogo = styled.img`
  height: 70px;
  width: 130px;
`
export const ChannelName = styled.p`
font-weight:normal;
font-size:13px;
color:color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};`

export const SubscribersCount = styled.p`
font-weight:normal;
font-size:10px;
line-height:0.7;
color:color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};`

export const ChannelDescription = styled.p`
font-weight:normal;
font-size:13px;
color:color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')};
`
export const ChannelDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${props => (props.theme === true ? '#ffffff' : '#0f0f0f')}; ;
`

export const DisLikeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    width: 34%;
    font-size: 13px;
  }
  @media screen and (max-width: 767px) {
    width: 35%;
    font-size: 10px;
  }

  color: ${props => (props.theme === true ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    width: 34%;
    font-size: 13px;
  }
  @media screen and (max-width: 767px) {
    width: 35%;
    font-size: 10px;
  }

  color: ${props => (props.theme === true ? '#2563eb' : '#64748b')};
`
