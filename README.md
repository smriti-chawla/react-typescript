# react-typescript

Setup steps 

# Make a new directory
$ mkdir react-typescript

# Change to this directory within the terminal
$ cd react-typescript

# Initialise a new npm project with defaults
$ npm init -y

# Install React dependencies
$ npm install react react-dom

# Make index.html and App.tsx in src folder
$ mkdir src
$ cd src
$ touch index.html
$ touch App.tsx

# Open the directory in your favorite editor
$ code .


# Install Parcel to our DevDependencies
$ npm i parcel-bundler -D

# Install TypeScript
$ npm i typescript -D

# Install types for React and ReactDOM
$ npm i -D @types/react @types/react-dom

 # add  in package.json
$ scripts": {
    "dev": "parcel src/index.html"
},



Our project can be run with $ npm run dev and accessed at http://localhost:1234.

