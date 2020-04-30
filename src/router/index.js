import { register } from 'react-native-bundle-splitter';
const Router = register({
    require: () => require('./scenes'),
});

export default Router;
// import Router from './scenes';
// export default Router;
