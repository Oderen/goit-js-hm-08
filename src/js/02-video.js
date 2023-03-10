
import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const options = {
        id: 59777392,
        width: 640,
        loop: true
    };

    const player = new Player('vimeo-player', options);

    player.setVolume(0);
    

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const seconds = localStorage.getItem('videoplayer-current-time');
     
player.setCurrentTime(seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
