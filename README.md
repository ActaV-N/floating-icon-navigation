# Floating-icon-navigation

(Name should be changed...)

[Example image should be here]

# Installation

```sh
yarn add @actav/floating-icon-navigation
```

or

```sh
npm install @actav/floating-icon-navigation
```

# Usage

## Provider

Wrap your App with Fin `Provider`

```ts
// ... some imports
import { FinProvider } from '@actav/floating-icon-navigation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FinProvider>
      <App />
    </FinProvider>
  </React.StrictMode>,
);
```

## Components

### Fins, Fin: Content Generator

```ts
// ... some imports
import { Fins, Fin } from '@actav/floating-icon-navigation';

function Generator() {
  // There should be at least one Fin component with index
  return <Fins>
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
  </Fins>;
}

export default Generator;
```

Abovce code will make this:

<img width="235" alt="Screenshot 2023-07-15 at 1 18 34 AM" src="https://github.com/ActaV-N/floating-icon-navigation/assets/26318387/418226c1-94d2-4228-91d9-42e8c195ed7a">



### FinReceiver: Content Receiver

```ts
// ... some imports
import { FinReceiver } from '@actav/floating-icon-navigation';

function Receiver() {
  return (
    <div>
      <FinReceiver />
      <Generator />
    </div>
  );
}

export default Receiver;
```

If you add receiver, result will be like this:

<img width="343" alt="Screenshot 2023-07-15 at 1 18 39 AM" src="https://github.com/ActaV-N/floating-icon-navigation/assets/26318387/84c8217a-2b56-4dbf-a7c6-b0094a4795b0">

Final result:


