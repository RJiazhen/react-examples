import type { Meta, StoryObj } from '@storybook/react';
import { SendBeaconExample } from '../examples/SendBeaconExample';

const meta = {
  title: 'Example/SendBeaconExample',
  component: SendBeaconExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SendBeaconExample>;

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
