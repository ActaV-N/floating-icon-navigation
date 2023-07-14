# Floating-icon-navigation

[![NPM version][npm-image]][https://www.npmjs.com/package/@actav/floating-icon-navigation]
[![Build][github-build]][https://github.com/ActaV-N/floating-icon-navigation/actions]
![npm-typescript]
[![License][github-license]][https://github.com/ActaV-N/floating-icon-navigation/blob/main/LICENSE]

(Name should be changed...I think...)

[**Live Demo**](https://actav-n.github.io/floating-icon-navigation/)

Ex)

![Screen Recording 2023-07-15 at 1 21 05 AM](https://github.com/ActaV-N/floating-icon-navigation/assets/26318387/8346f7bb-cd15-437e-b67b-81d79d5351af)

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
  return (
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
  );
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
