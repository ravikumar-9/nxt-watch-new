import styled from 'styled-components'

export const SidebarContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 15%;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
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
  color: ${props => (props.theme === true ? 'white' : 'black')};
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
