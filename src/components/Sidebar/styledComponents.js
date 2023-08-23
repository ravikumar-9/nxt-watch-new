import styled from 'styled-components'

export const SidebarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 20%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const SidebarItemContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 4px;
`

export const SidebarItemHeading = styled.h1`
  font-weight: bold;
  font-size: 13px;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#181818')};
  padding-left: 9px;
`
export const SidebarItemsContainer = styled.div`
  height: 30%;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`
