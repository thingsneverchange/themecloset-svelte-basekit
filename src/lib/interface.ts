import State from 'deep-state-observer'; // const State = require('deep-state-observer');

export const store = new State({
  theme: 'light',
  fontSize: 16,
  fontSizeUnit: 'px',
  cdnURL: 'https://tcdn.imgix.net/api/',
  baseURL: '',
  fontFamily: 'arial',
  notification: {
    text: '',
    title: 'New message',
    show: false
  }
});
