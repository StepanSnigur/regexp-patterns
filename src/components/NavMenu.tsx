import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppStateType } from '../store'
import { Link } from 'react-router-dom'

const NavMenuWrapper = styled.div`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #fff;
  border-radius: 7px;
`
const NavMenuLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const NavMenu = () => {
  const menuLinks = useSelector((state: AppStateType) => state.patternsTags)

  return (
    <NavMenuWrapper>
      {menuLinks.length ?
        menuLinks.map((link: string, i: number) => <NavMenuLink to={`/${link}`} key={i}>{link}</NavMenuLink>) :
        <div>loading</div>}
      <input type="text"/>
    </NavMenuWrapper>
  )
}

export default NavMenu
