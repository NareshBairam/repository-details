import { createHashHistory } from 'history';

export default createHashHistory({
    basename: process.env.PUBLIC_URL
});