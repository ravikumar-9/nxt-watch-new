import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginSection,
  LoginFormContainer,
  LoginFormImage,
  LoginForm,
  LabelElement,
  InputElement,
  CheckboxElement,
  CheckboxLabel,
  CheckboxContainer,
  LoginButton,
  LoginButtonContainer,
  ErrorMessageParagraph,
} from './styledComponents'

class Login extends Component {
  state = {
    nameInput: '',
    passwordInput: '',
    isChecked: false,
    showErrorMsg: false,
    errorMessage: '',
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSubmitSuccess = jwt => {
    Cookies.set('jwt_token', jwt, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = error => {
    console.log(error)
    this.setState({showErrorMsg: true, errorMessage: error})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {nameInput, passwordInput} = this.state

    const userDetails = {
      username: nameInput,
      password: passwordInput,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
      console.log(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      nameInput,
      passwordInput,
      isChecked,
      showErrorMsg,
      errorMessage,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginSection>
        <LoginFormContainer>
          <LoginFormImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="login"
          />
          <LoginForm onSubmit={this.onSubmitDetails}>
            <LabelElement htmlFor="name">USERNAME</LabelElement>
            <InputElement
              type="text"
              id="name"
              value={nameInput}
              onChange={this.onChangeNameInput}
            />
            <LabelElement htmlFor="password">PASSWORD</LabelElement>
            {isChecked ? (
              <InputElement
                type="text"
                id="password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            ) : (
              <InputElement
                type="password"
                id="password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            )}
            <CheckboxContainer>
              <CheckboxElement
                type="checkbox"
                id="check"
                checked={isChecked}
                onChange={this.onClickCheckbox}
              />
              <CheckboxLabel htmlFor="check">Show Password</CheckboxLabel>
            </CheckboxContainer>
            <LoginButtonContainer>
              <LoginButton type="submit">Login</LoginButton>
            </LoginButtonContainer>
            {showErrorMsg && (
              <ErrorMessageParagraph>{errorMessage}</ErrorMessageParagraph>
            )}
          </LoginForm>
        </LoginFormContainer>
      </LoginSection>
    )
  }
}

export default Login
