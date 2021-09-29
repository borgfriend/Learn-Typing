import { render, screen } from '@testing-library/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import i18n from "../src/i18n/en.json";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('contains the app title', () => {
  render(<App />)
  const titleElement = screen.getByText(i18n.APP_TITLE)
  expect(titleElement).toBeInTheDocument();
})