// object descructuring is used to extract the values from the object and store them in variables

const band = {
    name: "Metallica",
    genre: "Heavy Metal",
    members: 4,
    albums: 10,
    formed: 1981,
    origin: "Los Angeles, California, U.S.",
}

const {name, genre, members, albums, formed, origin} = band; // this is called object destructuring and it is used to extract the values from the object and store them in variables
console.log(name, genre, members, albums, formed, origin);    // this will print the values of the object
// object destructuring can also be used to change the name of the variables
const {name: bandName, genre: bandGenre, members: bandMembers, albums: bandAlbums, formed: bandFormed, origin: bandOrigin} = band;
console.log(bandName, bandGenre, bandMembers, bandAlbums, bandFormed, bandOrigin); // this will print the values of the object

