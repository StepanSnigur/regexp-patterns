import React from 'react'
import styled from 'styled-components'
import { blink } from './LoadingPatternBlock'

const MockNavLink = styled.div`
  width: 85px;
  height: 21px;
  background: #eee;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-align: center;
  outline: none;
  z-index: 1;

  &:before {
    content: '';
    width: 10px;
    height: 200%;
    position: absolute;
    top: -50%;
    transform: rotate(40deg);
    animation: ${blink} 1s ease-in-out infinite;
    border-radius: 20px;
    background: #e0e0e0;
    box-shadow: 0 0 18px #c2c2c2;
    z-index: 2;
  }
`

const LoadingNavMenuLinks = () => {
  const MOCK_NAV_MENU_LINKS_COUNT = 5 // TO-DO: make this constant depends of server data
  const mockNavMenuLinksArr = new Array(MOCK_NAV_MENU_LINKS_COUNT).fill(0)

  return mockNavMenuLinksArr.map((_, i) => <MockNavLink />)
}

export default LoadingNavMenuLinks
