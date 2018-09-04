
## Build Setup

``` bash
# install dependencies
$ yarn install --ignore-engines

# prebuild the vendor.dll.js, which is a must-have file that will be used across main.js, renderer.js, and about.js.
$ yarn run build:dll

# serve with hot reload at localhost:9080
$ yarn run dev

# build electron applications for all platforms
$ yarn run build

# build the electron application for the specific target platform
$ yarn run build:darwin # macOS
$ yarn run build:linux  # Linux
$ yarn run build:mas    # Mac AppStore
$ yarn run build:win32  # Windows

# lint all JS/Vue component files in `src/`
$ yarn run lint

# lint and fix
$ yarn run lint:fix

# test the electron application for production
$ yarn run test
```