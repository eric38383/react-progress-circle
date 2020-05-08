# Simple React Progress Circle

[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Simple React Progres Circle is a circlular progress bar made into a reusable react component with React Hooks.

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=react-progress-circle
[npm]: https://www.npmjs.org/package/react-simple-progress-circle

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=react-progress-circle
[coveralls]: https://coveralls.io/github/user/repo

# Start
```
npm i react-simple-progress-circle
```

# Example

```jsx
import React from 'react';
import ProgressCircle from 'react-simple-progress-circle';

  <ProgressCircle 
        size={50} //Height and Width of the circle
        color={'green'} //Color of the circle stroke
        progress={20} //Number between 0 and 100
        strokeWidth={20} //width of the circle strokes. Stroke width must be at least half of size
        opacity={0.4} //a number between 0 and 1. 
        time={0.4} //in seconds, for progress transition
        timingFunction={'linear'} //linear, ease in, ease-out, east-in-out, step-start, step-end
    />
```




