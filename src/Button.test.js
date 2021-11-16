import React from 'react';
import Button from './Button'
import { render, screen, fireEvent } from '@testing-library/react';

describe("tests for button component",() => {
  test("should render", () => {
    render(<Button>This is a button</Button>);
    expect(screen.getByText(/This is a button/)).toBeInTheDocument();
  })
})