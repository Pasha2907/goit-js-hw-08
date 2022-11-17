import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onPlay(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
