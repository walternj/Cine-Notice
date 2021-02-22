import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import {MdClose} from 'react-icons/md'

import SearchBar from '../SearchBar'
import Menu from './Menu'

import { Container, MyList, HeaderUser } from './styles'

import logo from '../../assets/img/logo-orange.png'
import logo_c from '../../assets/img/logo-c.png'

const Header: React.FC = () => {
  const [blackheader, setBlackHeader] = useState<boolean>(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [logoUrl, setLogoUrl] = useState(window.innerWidth >= 768 ? logo : logo_c)
  const history = useHistory()

  useEffect(() => {
    function getWidth() {
      let width = window.innerWidth
      setLogoUrl(width >= 768 ? logo : logo_c)
    }
    window.addEventListener('resize', getWidth)
  },[])

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

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <Container background={blackheader} >
      <img className="header--logo"
        src={logoUrl} alt="Ciné-Notice"
        onClick={() => history.push("/")}
    />

      <SearchBar />

      <HeaderUser
        onClick={() => handleToggleMenu()}
        toggleMenu={toggleMenu}
      >
        <img src="https://picsum.photos/200/200" alt="user"/>
        <MdClose id="closeIcon" fill="var(--color-red)" size={32} />
      </HeaderUser>
      <Menu toggleMenu={toggleMenu} />
      <MyList onClick={() => history.push("/mylist")} />
    </Container>
  )
};

export default Header
