import React from 'react';

import { render, waitFor } from '@testing-library/react';
import Button from 'Components/Button';

describe('Render component <Button/>', () => {
    test('Expect text Button', async () => {
        const { getByText } = render(<Button />);
        await waitFor(() => expect(getByText(/Button/i)).toBeInTheDocument());
    });
});
