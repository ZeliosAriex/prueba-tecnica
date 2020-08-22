import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { find } from 'styled-components/test-utils'
import Col from '../Col'

it('Renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Col>Test</Col>, div)
})

it('Renders text inside', () => {
  const root = document.createElement('div')
  ReactDOM.render(<Col>Text to render</Col>, root)

  const component = find(root, Col)

  expect(component).toHaveTextContent('Text to render')
})

it('Has class col-12 without params', () => {
  const { queryByText } = render(<Col>Test</Col>)

  expect(queryByText('Test')).toHaveClass('col-12')
})

it('Sets all classes correctly', () => {
  const { queryByText } = render(
    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
      Test
    </Col>
  )

  expect(queryByText('Test')).toHaveClass(
    'col-6',
    'col-sm-6',
    'col-md-6',
    'col-lg-6',
    'col-xl-6'
  )
})
