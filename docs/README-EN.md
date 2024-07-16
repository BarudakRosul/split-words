<div align="center">
  <img src="../image/logo.svg" alt="Split Words Logo" width="220"/>
  <h1>Split Words</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-words/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/split-words/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-words/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-words/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/node/v/%40barudakrosul%2Fsplit-words" alt="Node Engines"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fsplit-words" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-words" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-words" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-words/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-words?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-words/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-words?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-words/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-words" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Split Words is a JavaScript extension that splits strings into arrays based on words, with the option to include or remove separator characters. It allows splitting based on spaces and hyphens, with the option to retain spaces in the result.

## Features

Split Words offers the following features:

- Splits strings into arrays based on words.
- Option to include or omit space characters in the results.
- Option to split words based on hyphens.
- Can be integrated into TypeScript code.

## Installation

To install Split Words locally, follow these installation steps:

```shell
npm install @barudakrosul/split-words
```

## Usage

To start using Split Words, import the module first:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-words");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-words";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-words";
```

Example of usage:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords());

// Result:
// [
//   'Hello,',  'world!',
//   'This',    'is',
//   'an',      'example-',
//   'string.'
// ]
```

Example if the `includewhitespace` option is set to `true`:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords(true));

// Result:
// [
//   'Hello,',   ' ',
//   'world!',   ' ',
//   'This',     ' ',
//   'is',       ' ',
//   'an',       ' ',
//   'example-', 'string.'
// ]
```

Example if the `breakonhyphens` option is set to `false`:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords(false, false));

// Result:
// [
//   'Hello,', 'world!', 'This', 'is',
//   'an', 'example-string.'
// ]
```

## Contribution

Contributions to Split Words are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Split Words is licensed under the Apache-2.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Split Words appreciates the support and contributions of the following individuals and open source projects:

- [@Achixz](https://github.com/Achixz) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Split Words by referring to [Changelog](https://github.com/BarudakRosul/split-words/releases).

Thank you for choosing Split Words! We aim to provide an easy solution to convert strings into arrays based on words.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)