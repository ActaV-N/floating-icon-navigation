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

## Components

### Fins, Fin: Content Generator

```ts
// ... some imports
import { Fins, Fin } from '@actav/floating-icon-navigation';

function Generator() {
  // There should be at least one Fin component with index
  return <Fins>
    <Fin index path={#{path here}} icon={#{icon here}} >Content 1</Fin>
    <Fin path={#{path here}} icon={#{icon here}} >Content 2</Fin>
    <Fin path={#{path here}} icon={#{icon here}} >Content 3</Fin>
  </Fins>;
}

export default Generator;
```

[picture of a result above]

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

[picture of a result above]
