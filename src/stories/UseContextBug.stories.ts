import type { Meta, StoryObj } from '@storybook/react';
import { UseContextBug } from '../components/UseContextBug';

const meta = {
  title: 'Example/UseContextBug',
  component: UseContextBug,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UseContextBug>;

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
