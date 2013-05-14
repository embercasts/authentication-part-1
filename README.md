## Embercast: Client-side Authentication, Part 1

This two-part series on client-side authentication focuses on how you
can configure your single-page Ember app to query data from the server
using token-based authentication. This first part focuses on basic app
setup/organization, and how to build a username / password form to
retrieve the token from the server.

Part 2 will demonstrate how to use this token to perform queries in
conjunction with Ember Model, as well as how to hack into the Ember
Router to make it possible to recall and retry previously attempted 
transitions.

## Install

Clone this repository, and in the new directory, run:

    npm install
    node server.js

This will run a Node server on `localhost:3000` that you can visit in
your browser.

## Structure

`server.js` in the root directory is the Node server that features
very simple token-based authentication. 

`public/js/app.js` is where all Ember code for this Embercast resides.

