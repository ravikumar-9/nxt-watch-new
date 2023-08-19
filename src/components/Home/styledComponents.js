import styled from 'styled-components'

export const HomeSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
`

export const HomeSectionMainContainer = styled.div`
  width: 85%;
`

export const SearchBar = styled.input`
  width: 40%;
  border: 2px solid black;
  height: 30px;
`

export const HomeSectionVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`
