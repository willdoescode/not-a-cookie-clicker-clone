[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![NPM version](https://badge.fury.io/js/badge-list.svg)](http://badge.fury.io/js/badge-list)
# Not A Cookie Clicker Clone
## A very cool project for CHS Coding Club

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```

### Progress
* Made two panels where everything will happen
    * Found that display flex is the best along with flex-grow: 1
* Changed the main image and made styling look better
    * I could not decide on a background color for two straight days
* Got started on the global store
* Added buy slots with level ups
    * Slots change color based off of if there are enough points
* Added a saving system to the global store that uses localStorage for a seamless user experience
    * localeStorage op
* Added helpers and even listeners for the idle aspect of the game
    * One function with setInterval is enough to handle all of this async >>>>
* Implemented an anti cheat that detects auto clicking at a high success rate
    * I still need to watch for insane point jumps
