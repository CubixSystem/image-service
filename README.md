# image-service

Image service based on [sharp](https://github.com/lovell/sharp) library

Features:

- scale and crop

Tested on `node v8.11.3`

## How to use

`GET` on `/img` with query params:

- href - url of source image
- x - x coord of top left point
- y - y coord of top left point
- w - width of selected region
- h - height of selected region
- s - scale multiplier

example: `curl -v "localhost:3000/img?href=http://www.google.com/images/srpr/logo11w.png&x=0&y=0&w=200&h=100&s=2" -o image.png`

## Production setup

Run

```sh
npm install
```

then

```sh
npm start
```

## Dev setup

Run

```sh
npm install
```

then

```sh
npm run start:dev # start and automatically restarts the node process when a file is modified
```

or

```sh
npm run inspect # start app and expose port for debugger
```

## Docker setup

Run

```sh
docker-compose up # start app
```

or

```sh
docker-compose -f docker-compose.yml -f docker-compose.debug.yml up # start app and expose port for debugger
```

## TODO

Research cluster and debugger combination
