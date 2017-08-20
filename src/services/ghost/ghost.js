import * as ghost from './ghost-sdk';

ghost.init({
  clientId: process.env.REACT_APP_GHOST_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GHOST_CLIENT_SECRET
});

export default ghost;
