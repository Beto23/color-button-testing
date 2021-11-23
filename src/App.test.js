import { render, screen, fireEvent } from '@testing-library/react'
import App, { replaceCamelWhitespaces } from './App'

test('button has the correct initial color', () => {
  render(<App />)
  // find an element width a role of "button" and text 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton)

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })

  //expect the button text to be "Change to MediumVioletRed"
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)
  // chech that the button start enabled
  const colorButton = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })
  expect(colorButton).toBeEnabled()

  //chech that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables to second click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has gray background and revert to MediumVioletRed', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
})

test('Clicked disabled button has gray background and revert to MidnightBlue', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {
    name: /change to Midnight Blue/i,
  })
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i })

  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})

// unit function test
describe('spaces before camel-case cappital letters', () => {
  it('Works for no inner cappital letters', () => {
    expect(replaceCamelWhitespaces('Red')).toBe('Red')
  })
  it('Works for one inner cappital letters', () => {
    expect(replaceCamelWhitespaces('MidnighBlue')).toBe('Midnigh Blue')
  })
  it('Works for multiple inner cappital letters', () => {
    expect(replaceCamelWhitespaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
