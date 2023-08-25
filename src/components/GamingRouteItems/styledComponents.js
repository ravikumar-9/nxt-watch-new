import styled from 'styled-components'

export const Video = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-top: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: ${props =>
      props.theme === true ? '#181818' : '#f9f9f9'};
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-right: auto;
    background-color: ${props =>
      props.theme === true ? '#181818' : '#f9f9f9'};
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 170px;
`
export const TitleHeading = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 1.3;
`
export const ViewsCount = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 0.5;
`
