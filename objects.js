var playlist = {
  artistNames: 'song titles'
};

function updatePlaylist(playlist, artistNames, songtitle){
playlist[artistNames] = 'songtitle';
return playlist
}
function removeFromPlaylist(playlist, aristNames){
delete playlist['artistNames'];
return playlist;
}
