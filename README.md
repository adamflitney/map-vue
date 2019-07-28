# map-challenge

[Live Demo](https://vue-maps-tech-chall.netlify.com/)

_I didn't manage to do the stretch requirements in the alotted time, but I took a break and then finished them anyway.
You can find the source code in a branch called *extra-credit* and I have included a demo for that too_

[Extra Credit Demo](https://vue-maps-tech-chall-extra.netlify.com/)


## Requirements

* Runs in chrome on desktop and safari on mobile.
* Loads map data from provided endpoint.
* Display a map with a pin for each location in the data feed using latitude and longitude from the feed.
* Once a pin is tapped, popup should show country name from feed.

#### Stretch
* Provide a list of pins seperately within the app.
* Allow a user to click an item in the feed, centre the map and open a popup for that location.


## Basic Design
* Single page.
* Full screen map.
* Store feed data in Vuex store.

## Installation
* Clone this repo.
* Run `npm install`.
* Run `npm run serve` to run locally.
* Run `npm run build` to deploy.

## Testing
Run `npm run test:unit` to run unit tests.
