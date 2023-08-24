import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

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

import './index.css'

const VideoItem = props => {
  console.log(props)
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const splitted = publishedAt.split(' ')
  console.log(splitted)
  const year = splitted[2]
  const month = splitted[0]
  const dateLength = splitted[1].length
  const date = splitted[1].slice(-dateLength, -1)

  const formattedDate = formatDistanceToNow(
    new Date(`${year}-${month}-${date}`),
  )

  const s = formattedDate.split(' ').slice(1)

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Video theme={isDarkTheme}>
            <Link to={`/videos/${id}`} className="nav-link">
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer theme={isDarkTheme}>
                <ChannelLogo
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <ChannelDetailsContainer>
                  <TitleHeading>{title}</TitleHeading>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndTimeContainer theme={isDarkTheme}>
                    <ViewsCount>{viewCount} views</ViewsCount>
                    <PublishedDate>{s.join(' ')} ago</PublishedDate>
                  </ViewsAndTimeContainer>
                </ChannelDetailsContainer>
              </VideoDetailsContainer>
            </Link>
          </Video>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoItem
