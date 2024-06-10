function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling function three times with different values:
console.log(make_album("Atif Aslam", "Album title 01"));
console.log(make_album("Asim Azhar", "Album title 02"));
//Calling a function with third parameter:
console.log(make_album("Momina Mustehsam", "Album title 03", 10));
