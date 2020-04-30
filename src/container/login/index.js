import { register } from 'react-native-bundle-splitter';

const LoginContainer = register({
    require: () => require('./loginContainer'),
});

export default LoginContainer;