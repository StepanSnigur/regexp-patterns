import React from 'react'
import styled from 'styled-components'

interface IPatternBlock {
  name: string,
  regExp: string
}

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
    width: 85%;
    height: 40px;
    margin 20px auto 0 auto;
    border-radius: 20px;
    text-align: center;
    border: 0.5px solid #eee;
    outline: none;
  }
`

const PatternBlock: React.FC<IPatternBlock> = ({ name, regExp }) => {
  return (
    <PatternBlockWrapper>
      <h5>{name}</h5>
      <input type="text" readOnly={true} value={regExp}/>
      <input type="text" placeholder="Введите тестовое слово"/>
    </PatternBlockWrapper>
  )
}

export default PatternBlock
