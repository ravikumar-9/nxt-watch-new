import styled from 'styled-components'

export const HeaderSection = styled.div`
  height: 13vh;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  height: 45px;
  width: 180px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid blue;
  border-radius: 3px;
  color: blue;
  height: 30px;
  width: 90px;
  cursor: pointer;
`
