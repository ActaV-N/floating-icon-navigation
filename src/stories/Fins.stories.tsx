import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Fins } from '~components';

type ArgTypes = ComponentProps<typeof Fins>;

export default {
  title: 'Components/Fins',
  component: Fins,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
