import React from 'react'
import { render } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import PatternBlock from '../components/PatternBlock'

describe('PatternBlock', () => {
  let PatternBlockComponent: any;
  beforeEach(() => {
    PatternBlockComponent = render(<PatternBlock name="test" regExp="/test/g" />)
  })

  test('Test copy to clipboard', () => {
    Object.defineProperty(window.navigator, 'clipboard', {
      value: {
        writeText: jest.fn(() => Promise.resolve(true))
      }
    })
    const node = PatternBlockComponent.container.querySelector('div').querySelector('div')
    fireEvent.click(node)
    expect(window.navigator.clipboard.writeText).toHaveBeenCalled()
  })
})
