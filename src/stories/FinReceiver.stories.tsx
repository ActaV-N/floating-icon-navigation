import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { AiFillAlert, AiFillAlipaySquare, AiFillAmazonCircle, AiFillAudio, AiFillBank } from 'react-icons/ai';
import { Fin, FinReceiver, Fins } from '~components';

type ArgTypes = ComponentProps<typeof FinReceiver>;

const wrapper = (storyFn: any) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#1D1D1C',
      color: '#fff',
    }}
  >
    <div>{storyFn()}</div>
    <Fins>
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
    </Fins>
  </div>
);

export default {
  title: 'Components/FinReceiver',
  decorators: [wrapper],
  component: FinReceiver,
} as Meta<ArgTypes>;

export const Default: StoryObj<ArgTypes> = {};
