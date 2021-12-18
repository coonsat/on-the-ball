# On The Ball application

## Contents
* [Introduction](https://github.com/coonsat/on-the-ball-server#introduction)
* [Getting started](https://github.com/coonsat/on-the-ball-server#getting-started)
* [Starting the application](https://github.com/coonsat/on-the-ball-server#starting-the-application)
* [Resources for planning](https://github.com/coonsat/on-the-ball-server#resources-for-planning)

## Introduction
This application concerns the backend server for On The Ball. This section does not have a user interface. 

## Getting started
1. Download or clone this repository
2. Extract it if necessary
3. Run `npm install` to install all dependencies
4. Run `npm run seed` to populate the database with dummy data

## Starting the application 
There are two servers in this application that have different purposes.

authserver handles everything to do with authentication (e.g. creating, refreshing, deleting a token)

server handles all other activities (e.g. scheduling, contracts, adding customers)

1. Run `npm run authserver` to start the authentication server on port `5000`
2. Run `npm run server` to start the ordinary server on port `4000`

## Resources for planning
* [Google Drive](https://drive.google.com/drive/folders/1GtZfhyFhE3XLlLNzNsnHxeeVlkTvzRF-)
* [Miro Board](https://miro.com/app/board/o9J_l3qsWh8=/)