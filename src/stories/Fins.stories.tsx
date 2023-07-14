import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import {
  AiFillAlert,
  AiFillAlipaySquare,
  AiFillAmazonCircle,
  AiFillAudio,
  AiFillBank,
  AiFillBell,
  AiFillCaretUp,
} from 'react-icons/ai';
import { Fins, Fin } from '~components';

type ArgTypes = ComponentProps<typeof Fins>;

const wrapper = (storyFn: any) => (
  <div
    style={{
      background: '#1D1D1C',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {storyFn()}
  </div>
);

export default {
  title: 'Components/Fins',
  component: Fins,
  decorators: [wrapper],
  args: {
    children: (
      <>
        <Fin path='alert' activeColor='#FA5252' icon={<AiFillAlert />}>
          Hello
        </Fin>
        <Fin index path='square' activeColor='#20C997' icon={<AiFillAlipaySquare />}>
          Nice to
        </Fin>
        <Fin path='circle' icon={<AiFillAmazonCircle />}>
          Meet you
        </Fin>
      </>
    ),
  },
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};

export const Fit: StoryObj<ArgTypes> = {
  args: {
    children: (
      <>
        <Fin path='alert' activeColor='#FA5252' icon={<AiFillAlert />}>
          Hello
        </Fin>
        <Fin index path='square' activeColor='#20C997' icon={<AiFillAlipaySquare />}>
          Nice to
        </Fin>
        <Fin path='circle' activeColor='#5C7CFA' icon={<AiFillAmazonCircle />}>
          Meet you
        </Fin>
        <Fin path='audio' activeColor='#845EF7' icon={<AiFillAudio />}>
          Bro
        </Fin>
        <Fin path='bank' icon={<AiFillBank />}>
          Hehe
        </Fin>
      </>
    ),
  },
};

export const ManyItem: StoryObj<ArgTypes> = {
  args: {
    children: (
      <>
        <Fin path='alert' activeColor='#FA5252' icon={<AiFillAlert />}>
          Hello
        </Fin>
        <Fin index path='square' activeColor='#20C997' icon={<AiFillAlipaySquare />}>
          Nice to
        </Fin>
        <Fin path='circle' activeColor='#5C7CFA' icon={<AiFillAmazonCircle />}>
          Meet you
        </Fin>
        <Fin path='audio' activeColor='#845EF7' icon={<AiFillAudio />}>
          Bro
        </Fin>
        <Fin path='bank' icon={<AiFillBank />}>
          Hehe
        </Fin>
        <Fin path='bell' icon={<AiFillBell />}>
          Bank
        </Fin>
        <Fin path='care' icon={<AiFillCaretUp />}>
          CareUp
        </Fin>
      </>
    ),
  },
};
