

# portfolio
[![GitHub open issues](https://img.shields.io/github/issues/undefined/portfolio.svg?maxAge=2592000)](https://github.com/undefined/portfolio/issues)
[![Npm version](https://img.shields.io/npm/v/portfolio.svg?maxAge=2592000)](https://www.npmjs.com/package/portfolio)

## Usage
```HTML
<HeaderComponent :text="hello"></HeaderComponent>
```
```javascript
import { HeaderComponent } from 'portfolio'

export default {
  components: {
    HeaderComponent
  }
}
```
## API

## Installation
```
npm install portfolio
```

## Usage
```HTML
<HeaderComponent :text="hello"></HeaderComponent>
```
```javascript
import { HeaderComponent } from 'portfolio'

export default {
  components: {
    HeaderComponent
  }
}
```
## Installation
```
npm install portfolio
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Update the API section of README.md with generated documentation
```
npm run doc:build
```

### Run style guide dev server
```
npm run styleguide
```

### Generate a static HTML style guide
```
npm run styleguide:build
```

### deployment
this is now on git pages

to deploy..
below are commands needed to publish on git pages
-this will build the dist folder and push the dist folder up to gh
Build Your Project:

git checkout deploy
git merge main
npm run build

git add dist -f
git commit -m "Add dist folder"

git subtree push --prefix dist origin deploy