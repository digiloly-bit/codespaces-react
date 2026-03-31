import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to the AI agency prototype', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /ai agency wordpress prototype ready/i,
  });
  expect(heading).toBeDefined();

  const link = screen.getByRole('link', {
    name: /ai-agency-prototype\/index.html/i,
  });
  expect(link.getAttribute('href')).toBe('/ai-agency-prototype/index.html');
});
