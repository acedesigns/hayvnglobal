# Hayvn : Front-End Task By Anele 'ace' M

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Build the Back end Service to connect/proxy to `https://swapi.dev/`

<hr/>

### I Built a small microservice with [NextJs](https://nextjs.org/) : here is a `package.json` snippet

```json
{
  "name": "next-netlify",
  "version": "0.5.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export"
  },
  "dependencies": {
    "axios": "^1.4.0",
    "cypress": "^10.0.3",
    "next": "^12.1.5",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```
### The source code for is included, Then run the back. `npm run dev`

Clone th back-end repo : `https://github.com/acedesigns/next-netlify` rest of intructions are on it

### Create your angular app or just run this one by doing ` npm run start`

Clone this repo, then inside of it run `npm i` then `npm run start`
 
On the Angular side, there two things to note

  - The start command on `package.son` point to a proxy
  - The file `angular.json` has the config to that proxy on line `79`
  
<hr />

## Actual Time Spent is just over 7 hrs

### Create an application of three pages, showing a list of products, with their details and the possibility to add to cart.
  - #### This objective was achieved

### Acceptance Criteria: Remarks

  - The application code shall be in Angular. :: **DONE**
  - Products `sourced` from https://swapi.dev/ :: **DONE**
  - Customer to browse products :: **DONE**
    -  Search is also implemented
  - add/remove a product to/from his/her cart :: **DONE**
  - Images, this was very confusing to me from the brief. 
    - I included images, since the API doesn't have, and I didn't see a property I can use to show difference between which products should have an image and which ones not to.
```json
{
  "name": "Sand Crawler",
  "model": "Digger Crawler",
  "manufacturer": "Corellia Mining Corporation",
  "cost_in_credits": "150000",
  "length": "36.8 ",
  "max_atmosphering_speed": "30",
  "crew": "46",
  "passengers": "30",
  "cargo_capacity": "50000",
  "consumables": "2 months",
  "vehicle_class": "wheeled",
  "pilots": [],
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/5/"
  ],
  "created": "2014-12-10T15:36:25.724000Z",
  "edited": "2014-12-20T21:30:21.661000Z",
  "url": "https://swapi.dev/api/vehicles/4/"
}
```
  - Sale items :
    - The `cost_in_credits` field shall be the product's price. :: **DONE**
    - I did not see a property to use or mark a sale other that `consumables` but even that one has a value of `Live food tanks`
    - I could not figure how to accomplish the rest of sale items based on the response from the API

## Notes

Please consider using a different API end-point for products, because it gets tricky trying to do sale items from an incompatible API for a Store Application.

I also think the curveballs might have been the CORS issue and how to overcome it.

### Rules

  - Cart Details to be written in custom css : 70% achieved

## Notes 2 : Improvements

- Cart page items are kept in memory at the moment,
- Prevent user from adding the same item twice
- Proper calculation on item increment on cart page
- Numbers are `TOO` big to calculate even when using `PIPES` at some point I got a `NAN`


## SHINING AREAS

- Lazy Loading Routes
- Using shared modules on Lazily loaded Modules
- Interceptor
- Dependency Injection
- ...


# My time is up
