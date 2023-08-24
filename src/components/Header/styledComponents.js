import styled from 'styled-components'

export const HeaderSection = styled.div`
  height: 13vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`

export const WebsiteLogo = styled.img`
  @media screen and (min-width: 768px) {
    height: 45px;
    width: 180px;
    margin-left: 14px;
  }
  @media screen and (max-width: 767px) {
    height: 45px;
    width: 120px;
    margin-left: 14px;
  }
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
export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin-right: 13px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  margin-left: 10px;
`
