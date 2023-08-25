import styled from 'styled-components'

export const HeaderSection = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  height: 13vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
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
  width: 24%;
  justify-content: space-between;
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
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const PopupContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  width: 200px;
  padding: 4px;
`

export const PopupDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  padding: 7px;
`
export const ConfirmButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: blue;
  border: none;
  cursor: pointer;
  color: white;
  margin: 5px;
  border-radius: 3px;
`

export const CancelButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  border-radius: 3px;
  margin: 5px;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
  margin: auto;
  justify-content: space-between;
`
