import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AppStateType } from '../store'
import { withRouter, Link, RouteComponentProps } from 'react-router-dom'
import LoadingBoundary from './LoadingBoundary'

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
const NavMenuInput = styled.input`
  width: 210px;
  height: 30px;
  padding: 0 12px;
  border: .5px solid #eee;
  border-radius: 20px;
`

const NavMenu: React.FC<RouteComponentProps<any>> = ({ history }) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const menuLinks = useSelector((state: AppStateType) => state.patternsTags)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchInputValue(value)
    value ? history.push(`/${value}/searching`) : history.push(`/`)
  }

  return (
    <NavMenuWrapper>
      <LoadingBoundary isLoading={!menuLinks.length}>
        {menuLinks.map((link: string, i: number) => <NavMenuLink to={`/${link}`} key={i}>{link}</NavMenuLink>)}
      </LoadingBoundary>
      <NavMenuInput
        type="text"
        placeholder="Поиск по названию"
        value={searchInputValue}
        onChange={handleChange}
      />
    </NavMenuWrapper>
  )
}

export default withRouter(NavMenu)
