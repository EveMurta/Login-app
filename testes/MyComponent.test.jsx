import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from '../src/MyComponent'; // caminho para o componente

test('o parágrafo deve estar visível e depois invisível', () => {
  render(<MyComponent />);

  const paragraph = screen.getByTestId('my-paragraph');
  expect(paragraph).toBeVisible();

  const button = screen.getByRole('button', { name: /toggle/i });
  fireEvent.click(button);

  expect(paragraph).not.toBeVisible();
});
