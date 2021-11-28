console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
    const musicAlbum = {
        title: title,
        artist: artist, 
        yearPublished: yearPublished
    }
    collection.push(musicAlbum);
    return musicAlbum;
}// end addToCollection

console.log(addToCollection('Ipsum', 'Lorem', 2015));
console.log(addToCollection('Random', 'Filler', 3689));
console.log(addToCollection('Placeholder', 'Filler', 3690));
console.log(addToCollection('King of Placeholders', 'Filler', 4001));
console.log(addToCollection('All About the Scrillions', 'Run DMX', 1970));
console.log(addToCollection('Filler', 'Random', 2022));

console.log(collection);

function showCollection(array) {
    console.log(`There are ${array.length} items in this collection`);
    // console.log(array);
    for(let item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
    }
    return array;
}// end showCollection

console.log(showCollection(collection));

function findByArtist(artist) {
    let artistResults = [];
    for(let item of collection) {
            //console.log(item.artist);
        if(item.artist === artist) {
            artistResults.push(item);
        }
    }
    return artistResults;
}// end findByArtist

showCollection(findByArtist('Filler'));
console.log(findByArtist('Absent'));