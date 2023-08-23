import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../context/WatchContext'

import {
  Video,
  ThumbnailImage,
  VideoDetailsContainer,
  TitleHeading,
  ChannelName,
  ChannelLogo,
  ChannelDetailsContainer,
  ViewsAndTimeContainer,
  ViewsCount,
  PublishedDate,
} from './styledComponents'

const VideoItem = props => {
  console.log(props)
  const {videoDetails} = props
  const {thumbnailUrl, channel, title, viewCount, publishedAt} = videoDetails
  const year = publishedAt.split()
  console.log(year)
  const publishedDate = formatDistanceToNow(new Date('2021-01-21'))
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <Video theme={isDarkTheme}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer theme={isDarkTheme}>
                <ChannelLogo
                  src={channel.profile_image_url}
                  alt={channel.name}
                />
                <ChannelDetailsContainer>
                  <TitleHeading>{title}</TitleHeading>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndTimeContainer theme={isDarkTheme}>
                    <ViewsCount>{viewCount} views</ViewsCount>
                    <PublishedDate>{publishedDate}</PublishedDate>
                  </ViewsAndTimeContainer>
                </ChannelDetailsContainer>
              </VideoDetailsContainer>
            </Video>
          </>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoItem
