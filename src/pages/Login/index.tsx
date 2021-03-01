import React, { useState } from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
  const [form, setForm] = useState({ email:'', password: ''})

  const handleChangeForm = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setForm({ email: '', password: ''})
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email"
          onChange={handleChangeForm} placeholder="E-mail" name="email"
          value={form.email}
        />
        <input type="password"
          placeholder="Mot de passe" name="password"
          autoComplete="off"
          value={form.password}
          onChange={handleChangeForm}
        />
        <button id="login-button">Login</button>
      </form>
    </Container>
  );
};

export default Login;
