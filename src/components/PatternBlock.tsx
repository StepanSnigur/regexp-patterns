import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import convertStringToRegExp from '../utils/convertStringToRegExp'

interface IPatternBlock {
  name: string,
  regExp: string
}

const fadeIn = keyframes`
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: -90%;
    opacity: 1;
  }
`
const PatternBlockWrapper = styled.div`
  width: 30%;
  margin-bottom: 3%;
  margin-right: 4.5%;
  padding: 20px 0;
  border-radius: 7px;
  background: #fff;
  
  h5 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    padding: 0 20px 20px 20px;
    border-bottom: 1px solid #000;
  }
  input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    margin 20px auto 0 auto;
    border-radius: 20px;
    text-align: center;
    border: 0.5px solid #eee;
    outline: none;
  }
`
const CopyBlock = styled.div`
  position: relative;

  input {
    width: 85%;
    cursor: pointer;
  }
  div {
    display: none;
    width: 100%;
    height: 37px;
    line-height: 40px;
    position: absolute;
    top: -90%;
    opacity: 1;
    text-align: center;
    border: 1px solid #f5f5f5;
    border-radius: 20px;
    background: #eee;
    user-select: none;
    
    &:before {
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      bottom: -7.5px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      background: #eee;
      border: 1px solid #eee;
      border-top: none;
      border-left: none;
    }
  }
  &:hover {
    div {
      display: block;
      animation: ${fadeIn} .5s;
    }
  }
`
const TestInputWrapper = styled.div`
  position: relative;
  width: 85%;
  margin: 20px auto 0 auto;
  border-radius: 20px;
  overflow: hidden;
  
  input {
    margin: 0;
  }
  &:before {
    content: '';
    width: 40px;
    height: 100%;
    line-height: 35px;
    text-align: center;
    display: none;
    position: absolute;
  }
  ${(props: {isTestWordSuit: boolean, testWord: string}) => props.testWord && (props.isTestWordSuit ? `
    &:before {
      display: block;
      content: '✓';
      background: green;
    }
  ` : `
    &:before {
      display: block;
      content: '⤫';
      background: red;
    }
  `)}
`

const PatternBlock: React.FC<IPatternBlock> = ({ name, regExp }) => {
  const [testWord, setTestWord] = useState('')
  const [isTestWordMatching, setIsTestWordMatching] = useState(false)
  useEffect(() => {
    // @ts-ignore
    const validRegExp = new RegExp(...convertStringToRegExp(regExp))
    setIsTestWordMatching(validRegExp.test(testWord))
  }, [regExp, testWord])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(regExp)
      .catch(e => console.log('Error in copy: ', e))
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestWord(e.target.value)
  }

  return (
    <PatternBlockWrapper>
      <h5>{name}</h5>
      <CopyBlock onClick={copyToClipboard}>
        <div>Копировать в буфер обмена</div>
        <input type="text" readOnly={true} value={regExp}/>
      </CopyBlock>
      <TestInputWrapper isTestWordSuit={isTestWordMatching} testWord={testWord}>
        <input type="text" placeholder="Введите тестовое слово" value={testWord} onChange={handleChange}/>
      </TestInputWrapper>
    </PatternBlockWrapper>
  )
}

export default PatternBlock
