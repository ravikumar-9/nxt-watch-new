import {Component} from 'react'

import {TiHome} from 'react-icons/ti'

import {AiFillFire} from 'react-icons/ai'

import {GrGamepad} from 'react-icons/gr'

import {HiOutlineSaveAs} from 'react-icons/hi'

import WatchContext from '../../context/WatchContext'

import {
  SidebarContainer,
  SidebarItemContainer,
  SidebarItemsContainer,
  SidebarItemHeading,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          return (
            <>
              <SidebarContainer theme={isDarkTheme}>
                <SidebarItemsContainer>
                  <SidebarItemContainer>
                    <TiHome height={40} width={40} color="red" size={24} />
                    <SidebarItemHeading theme={isDarkTheme}>
                      Home
                    </SidebarItemHeading>
                  </SidebarItemContainer>
                  <SidebarItemContainer>
                    <AiFillFire height={40} width={40} size={24} />
                    <SidebarItemHeading theme={isDarkTheme}>
                      Trending
                    </SidebarItemHeading>
                  </SidebarItemContainer>
                  <SidebarItemContainer>
                    <GrGamepad height={40} width={40} size={24} />
                    <SidebarItemHeading theme={isDarkTheme}>
                      Gaming
                    </SidebarItemHeading>
                  </SidebarItemContainer>
                  <SidebarItemContainer>
                    <HiOutlineSaveAs height={40} width={40} size={24} />
                    <SidebarItemHeading theme={isDarkTheme}>
                      Saved Videos
                    </SidebarItemHeading>
                  </SidebarItemContainer>
                </SidebarItemsContainer>
              </SidebarContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Sidebar
