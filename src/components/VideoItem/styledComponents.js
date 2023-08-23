import styled from 'styled-components'

export const Video = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 120px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 35%px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 68%;
`
export const TitleHeading = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 1.3;
`

export const ChannelName = styled.h1`
  font-weight: bold;
  font-size: 13px;
  line-height: 0.6;
`

export const ViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const ViewsCount = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 0.5;
`
export const PublishedDate = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 0.5;
`
