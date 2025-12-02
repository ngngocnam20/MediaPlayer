const music = [
    {
        id: 1,
        filename: 'Alone',
        filetype: 'audio/mpeg',
        filePath: 'Asset/Music/alone.mp3',
    },
    {
        id: 2,
        filename: 'Faded',
        filetype: 'audio/mpeg',
        filePath: 'Asset/Music/Faded.mp3',
    },
    {
        id: 3,
        filename: 'Sing Me to Sleep',
        filetype: 'audio/mpeg',
        filePath: 'Asset/Music/SingMeToSleep.mp3',
    }
];

document.querySelector('#mp3-play').addEventListener('click', () => {
    var audio = document.querySelector('#player');
    audio.play();
})

var player = document.querySelector('#player');
    player.addEventListener('timeupdate', () => {
    if(player.currentTime === player.duration) {
        imgMusic = document.querySelector('.img-music');
        imgMusic.style.animation = '';
    }
    else {
        var progress = player.currentTime/player.duration * 100;
        var handler = document.querySelector('#progress-handler');
        handler.style.left = progress + '%';
        var progressFollow = document.querySelector('#progress-follow');
        progressFollow.style.width = (progress) + '%';
        var imgMusic = document.querySelector('.img-music');
        imgMusic.style.animation = 'spin 12s linear infinite';
    }


})