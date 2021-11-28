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

console.log(addToCollection('Lorem', 'Ipsum', 2015));
console.log(addToCollection('Filler', 'Random', 3689));
console.log(addToCollection('Filler', 'Placeholder', 3690));
console.log(addToCollection('Filler', 'King of Placeholders', 4001));
console.log(addToCollection('Run DMX', 'All About the Scrillions', 1970));
console.log(addToCollection('Random', 'Filler', 2022));

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