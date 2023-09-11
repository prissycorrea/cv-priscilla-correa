import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import MenuLinks from '../components/MenuLinksContainer/MenuLinksContainer.jsx'

test('navega para as páginas corretas ao clicar nos links', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <MenuLinks />
    </Router>
  );

  const homeLink = screen.getByTestId('home-link');
  const aboutLink = screen.getByTestId('about-link');
  const skillsLink = screen.getByTestId('skills-link');
  const portfolioLink = screen.getByTestId('portfolio-link');
  const contactLink = screen.getByTestId('contact-link');

  userEvent.click(homeLink);
  expect(history.location.pathname).toBe('/');

  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');

  userEvent.click(skillsLink);
  expect(history.location.pathname).toBe('/skills');

  userEvent.click(portfolioLink);
  expect(history.location.pathname).toBe('/portfolio');

  userEvent.click(contactLink);
  expect(history.location.pathname).toBe('/contact');
});
