import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import { Fin } from '~components';

type ArgTypes = ComponentProps<typeof Fin>;

export default {
  title: 'Components/Fin',
  component: Fin,
  args: {
    icon: <AiFillAccountBook />,
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
