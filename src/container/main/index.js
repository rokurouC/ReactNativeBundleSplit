import { register } from 'react-native-bundle-splitter';

const MainContainer = register({
    require: () => require('./mainContainer'),
});

export default MainContainer;
