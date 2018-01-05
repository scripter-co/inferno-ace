# Inferno Ace

[![Travis](https://img.shields.io/travis/scripter-co/inferno-ace.svg)](https://travis-ci.org/scripter-co/inferno-ace) [![npm](https://img.shields.io/npm/v/inferno-ace.svg)](https://www.npmjs.com/package/inferno-ace)

[Ace Editor](https://ace.c9.io/) for Inferno.

## Installation

`npm i inferno-ace`

## Usage

```javascript
import InfernoAce from 'inferno'
<InfernoAce />
```

Params:

- onChange
  - Mapped to Ace change event with additional `inputValue` key containing the contents of the code editor.
- onInput
  - Mapped to Ace change event with additional `inputValue` key containing the contents of the code editor.
