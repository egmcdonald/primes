# primes

a Node.js application written in Typescript to generate and display a multiplication table of the first N primes

## Functionality

* user inputs a whole number N (where N is at least 1)
* application outputs an (N+1) x (N+1) multiplication grid of the first N prime numbers

## How to use

### Build

1.  install node from [NodeJS](https://nodejs.org/en/download)
2.  set the cwd as `primes`
3.  execute `npm run build`

### Run

#### Application

1.  build using build steps above
2.  execute `npm run start`
3.  open browser/other suitable http request application (e.g. Postman)
4.  navigate to http://localhost:4141
5.  follow directions to modify url to http://localhost:4141/primes/{N} (where N is a positive integer greater than or equal to 1)

#### Tests

1.  build using build steps above
2.  execute `npm run test`

## Review

### Positive outcomes

* accurateness of the prime generation algorithm
* high level of test coverage
* well-structured solution
* simple mocking of express objects

### Future development

* increase efficiency of prime generation algorithm
* move away from standard browser as output
