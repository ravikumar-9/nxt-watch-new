import {
  NotFoundSection,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotFoundSection>
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundContainer>
    </NotFoundSection>
  </>
)

export default NotFound
