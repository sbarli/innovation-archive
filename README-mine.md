# Innovation Game


# WHILE IN DEV:

Using this space for notes

## Packages To Install

### ESLINT

#### React
eslint-plugin-react
eslint-plugin-react-hooks
eslint-config-react-app

#### Cypress
eslint-plugin-cypress


### tsconfig

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "outDir": "build/dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom", "esnext.intl", "es2017.intl", "es2018.intl", "es2019.array"],
    "sourceMap": true,
    "allowJs": true,
    // "jsx": "react",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "rootDir": ".",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "isolatedModules": true,
    "importHelpers": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    // "noUnusedLocals": false,
    // "allowSyntheticDefaultImports": true,
    "paths": {
      "data/*": ["src/data/*"],
    }
  },
  "include": ["src/**/*"],
  "exclude": [
    "**/node_modules",
    "build",
    // "scripts",
    // "webpack",
    // "jest",
    // "src/setupTests.ts",
    // "src/utils/jest/**/*",
    // "*.test.*s"
  ],
  // "types": ["jest"],
  "typeRoots": ["node_modules/@types", "./src/types"]
}
```