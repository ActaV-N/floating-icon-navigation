import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Fin } from '~components';

type ArgTypes = ComponentProps<typeof Fin>;

export default {
  title: 'Components/Fin',
  component: Fin,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
