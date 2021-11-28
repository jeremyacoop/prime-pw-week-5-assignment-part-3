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