const fetch = require("node-fetch");

const getUsers = async () => {
    let users = await fetch('http://jsonplaceholder.typicode.com/users');
    return await users.json();
};
const getAlbums = async () => {
    let album = await fetch('http://jsonplaceholder.typicode.com/albums');
    return await album.json();
};
const getPhotos = async () => {
    let photo = await fetch('http://jsonplaceholder.typicode.com/photos');
    return await photo.json();
};

let resultFunc = async () => {
    let photos = await getPhotos().then(photo => photo);
    let albums = await getAlbums().then(album => album.map(item => item.photos = photos.splice(0, 50)));
    await getUsers().then(user => {
        user.map(item => item.albums = albums.splice(0, 10));
        console.log(user);
    });
};

resultFunc();