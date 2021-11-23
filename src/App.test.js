import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />)
  // find an element width a role of "button" and text 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i })

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton)

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe('Change to red');
})

test('initial conditions', () => {
  render(<App />)
  // chech that the button start enabled
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  //chech that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')

  expect(checkbox).not.toBeChecked();
})

test('Checkbox disables button on first click and enables to second click', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
})

test('Disabled button has gray background and revert to red', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
})

test('Clicked disabled button has gray background and revert to blue', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  const checkbox = screen.getByRole('checkbox', { name: /disabled button/i })

  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
})