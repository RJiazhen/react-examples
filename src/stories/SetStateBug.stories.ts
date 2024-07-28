import type { Meta, StoryObj } from '@storybook/react';
import { SetStateBug } from '../components/SetStateBug';

const meta = {
  title: 'Example/SetStateBug',
  component: SetStateBug,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SetStateBug>;

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
