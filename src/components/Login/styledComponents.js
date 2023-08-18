import styled from 'styled-components'

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  box-shadow: 3px 14px 20px 12px pink;
`

export const LoginFormImage = styled.img`
  height: 50px;
  width: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const LoginForm = styled.form`
  width: 90%;
  align-items: center;
`

export const LabelElement = styled.label`
  @media screen and (min-width: 768px) {
    font-weight: bold;
    font-size: 13px;
    color: #475569;
  }
  @media screen and (max-width: 767px) {
    font-weight: bold;
    font-size: 10px;
    color: #475569;
  }
`

export const InputElement = styled.input`
  width: 100%;
  height: 34px;
  border: 1px solid #475569;
  margin-bottom: 9px;
`

export const LoginButton = styled.button`
  height: 30px;
  width: 50%;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  border: none;
  border-radius: 3px;
  align-self: center;
  cursor: pointer;
  margin-bottom: 17px;
`

export const CheckboxElement = styled.input`
  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
  }
  @media screen and (max-width: 767px) {
    height: 14px;
    width: 14px;
  }
`

export const CheckboxLabel = styled.label`
  font-weight: bold;
  color: #0f0f0f;
  font-size: 13px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
export const ErrorMessageParagraph = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: red;
`
