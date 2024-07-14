import type { Meta, StoryObj } from '@storybook/react';
import { CaretPopupExample } from '../examples/CaretPopupExample';

const meta = {
  title: 'Example/CaretPopup',
  component: CaretPopupExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaretPopupExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
};
