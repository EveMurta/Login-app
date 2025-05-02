import React, { useState } from 'react';

export function MyComponent() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      <p
        style={{ display: visible ? 'block' : 'none' }}
        data-testid="my-paragraph"
      >
        Olá, mundo!
      </p>
    </div>
  );
}
