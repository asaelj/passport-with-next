import React from 'react'

export const LoginStyle = () => (
  <style jsx>{`
      .login {
        width: 300px;
        heigth: 400px;
      }
      .login__body {
        width: 100%;
        height: auto
      }
      .login form {
        display: flex;
        flex-direction: column;
      }
      .login__input {
        height: 35px;
        margin-bottom: 10px;
        border: solid 1px black;
      }
      .login__button {
        height: 35px;
      }
    `}
  </style>
)
