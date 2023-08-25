import {
  Video,
  ThumbnailImage,
  TitleHeading,
  ViewsCount,
} from './styledComponents'

const GamingRouteItems = props => {
  console.log(props)
  const {videoDetails} = props
  const {title, thumbnailUrl, viewCount} = videoDetails

  return (
    <>
      <Video>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <TitleHeading>{title}</TitleHeading>
        <ViewsCount>{viewCount} Watching Worldwide</ViewsCount>
      </Video>
    </>
  )
}

export default GamingRouteItems
