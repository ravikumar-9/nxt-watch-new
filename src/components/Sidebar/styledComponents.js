import styled from 'styled-components'

export const SidebarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 15%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
export const SidebarItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  outline: none;
  list-style-type: none;
  margin-bottom: 4px;
  margin-left: 7px;
`

export const SidebarItemHeading = styled.h1`
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
  padding-left: 9px;
`
export const SidebarItemsContainer = styled.nav`
  height: 30%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`
export const ContactUs = styled.p`
  font-weight: bold;
  font-size: 17px;
  text-align: start;
  padding-left: 9px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`

export const SocialMediaLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

export const ContactUsDescription = styled.p`
  font-weight: bold;
  font-size: 13px;
  padding-left: 9px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`
export const SocialMediaLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 7px;
  background-color: transparent;
`
