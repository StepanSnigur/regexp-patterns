import React from 'react'
import styled, { keyframes } from 'styled-components'

export const blink = keyframes`
  from {
    left: -20%;
  }
  to {
    left: 120%;
  }
`
const PatternBlockWrapper = styled.div`
  margin-bottom: 3%;
  padding: 20px 0;
  border-radius: 7px;
  background: #fff;
`
const PreloaderNamePlaceholder = styled.div`
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #000;

  div {
    width: 40%;
    height: 20px;
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
      left: -20%;
      transform: rotate(40deg);
      animation: ${blink} 1s ease-in-out infinite;
      border-radius: 20px;
      background: #e0e0e0;
      box-shadow: 0 0 18px #c2c2c2;
      z-index: 2;
    }
  }
`
const PreloaderInputPlaceholder = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 85%;
  height: 40px;
  background: #eee;
  padding: 0 20px;
  margin 20px auto 0 auto;
  border-radius: 20px;
  text-align: center;
  outline: none;
  z-index: 1;

  &:before {
    content: '';
    width: 10px;
    height: 200%;
    position: absolute;
    top: -50%;
    left: -20%;
    transform: rotate(40deg);
    animation: ${blink} 1s ease-in-out infinite;
    border-radius: 20px;
    background: #e0e0e0;
    box-shadow: 0 0 18px #c2c2c2;
    z-index: 2;
  }
`

const LoadingPatternBlock = () => {
  return (
    <PatternBlockWrapper>
      <PreloaderNamePlaceholder>
        <div />
      </PreloaderNamePlaceholder>
      <PreloaderInputPlaceholder />
      <PreloaderInputPlaceholder />
    </PatternBlockWrapper>
  )
}

export default LoadingPatternBlock
