import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

import SearchBar from '../SearchBar'

import { Container, MyList } from './styles'

const logoUrl = "https://fontmeme.com/permalink/210217/348a3cfe75f8cabeeb7061a4f136be21.png"

const Header: React.FC = () => {
  const [blackheader, setBlackHeader] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const input = document.getElementById('searchInput')
    let inputFocus: boolean

    input.addEventListener("focus", () => {
      inputFocus = true
      setBlackHeader(true)
    });

    input.addEventListener('focusout', () => {
      inputFocus = false
      setBlackHeader(false)
    })

    const scrollListener = () => {
      if(window.scrollY > 10 || inputFocus) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[])

  return (
    <Container background={blackheader} >
      <img className="header--logo"
        src={logoUrl} alt="Ciné-Notice"
        onClick={() => history.push("/")}
    />

      <SearchBar />

      <div className="header--user">
        <a href="/">
          <img src="https://picsum.photos/200/200" alt="user"/>
        </a>
      </div>

      <MyList onClick={() => history.push("/mylist")} />
    </Container>
  )
};

export default Header
