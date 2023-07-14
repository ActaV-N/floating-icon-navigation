import { Fin, Fins, FinReceiver } from '@actav/floating-icon-navigation';
import { AiFillHome, AiFillGithub, AiFillExclamationCircle } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <>
      <h1>Floating Icon Navigation</h1>
      <div className='container'>
        <Fins>
          <Fin index path='main' activeColor='#4263EB' icon={<AiFillHome />}>
            Home
          </Fin>
          <Fin path='git' icon={<AiFillGithub />}>
            Visit{' '}
            <a href='https://github.com/ActaV-N/floating-icon-navigation' target='_blank' rel='noopener'>
              repository
            </a>
          </Fin>
          <Fin path='info' activeColor='#40C057' icon={<AiFillExclamationCircle />}>
            This package is created by Lee
          </Fin>
        </Fins>

        <FinReceiver />
      </div>
    </>
  );
}

export default App;
