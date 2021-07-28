import React from 'react'
import { LoginStyle } from '../styles/LoginStyle'
import axios from 'axios'

const login = () => {
  async function handleSubmit (e) {
    e.preventDefault()

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }
    try {
      const res = await axios({
        method: 'post',
        url: '/api/login',
        data: body
      })
      console.log(res.data)
    } catch (error) {

    }
  }

  async function onClick () {
    const { data } = await axios({
      method: 'get',
      url: '/api/user'
    })
    console.log(data)
  }

  const onGetMovies = async () => {
    const { data } = await axios({
      method: 'get',
      url: '/api/movies'
    })
    console.log(data)
  }

  return (
    <>
      <div className='login'>
        <div className='login__body'>
          <form onSubmit={handleSubmit}>
            <input className='login__input' type='text' name='username' placeholder='Ususario' value='asael.lr.23@gmail.com' />
            <input className='login__input' type='password' name='password' placeholder='Contraseña' value='12345678' />
            <button className='login__button' type='submit'>Login</button>
          </form>
          <button type='button' onClick={onClick}>Get cookie</button>
          <button type='button' onClick={onGetMovies}>Get movies</button>
        </div>
      </div>
      <LoginStyle />
    </>
  )
}

export default login
