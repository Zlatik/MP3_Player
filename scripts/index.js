//variables declaration
var addSongButton = document.getElementById('addSong');
var listOfSongs = document.createElement('ul');
var audioWrapper = document.getElementById('wrapper');
var player = document.getElementById('audioPlayer');

var eachSong;
var linkSong; 



listOfSongs.setAttribute('id','songList');

audioWrapper.appendChild(listOfSongs);



//events handlers

//adding fuctionality to input[type = "file"]
addSongButton.onchange = function(){
    //dynamic creation of elements of the list
    eachSong = document.createElement('li');
    linkSong = document.createElement('a');
    listOfSongs.appendChild(eachSong);
    eachSong.appendChild(linkSong);
    linkSong.innerHTML = this.files[0].name;
    //set file's url to the 'a' tag attribute 'href'
    linkSong.setAttribute('href',URL.createObjectURL(this.files[0]))
    eachSong.setAttribute('class','song');
    linkSong.setAttribute('class','link');
    
    
    //adding functionality to the 'a' tag
    linkSong.onclick = function(e){
        //prevent default event when click occurs
        e.preventDefault();
        //set player's attribute src value of the 'a' tag's href attribute
        player.setAttribute('src',this.getAttribute('href'));
    }

}



