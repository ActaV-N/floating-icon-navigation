# Floating-icon-navigation

![npm](https://img.shields.io/npm/v/%40actav%2Ffloating-icon-navigation)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/actav-n/floating-icon-navigation/publish.yml)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ActaV-N/floating-icon-navigation)
![NPM](https://img.shields.io/npm/l/%40actav%2Ffloating-icon-navigation)



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

## Props

### Fin
|  **props**  |                                                          **description**                                                         |     **type**    |
|:-----------:|:--------------------------------------------------------------------------------------------------------------------------------:|:---------------:|
| icon        | icon component, representing navigation button                                                                                   | React.ReactNode |
| activeColor | css color string like hex, '#fff' or RGBA, 'rgba(255, 255, 255, 1)'. This activeColor will be applied when the fin is activated. | string?         |
| index       | Default fin. It's optional property but **at least one <Fin/> should be a index**                                                | bolean?         |
| path        | path for navigation. It's like ID.                                                                                               | string          |
| children    | children of <Fin/> will be shown in Receiver.                                                                                    | React.ReactNode |
