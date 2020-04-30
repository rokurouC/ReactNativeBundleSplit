import React from 'react';
import {
    Router,
    Scene,
    Lightbox,
} from 'react-native-router-flux';
import { register } from 'react-native-bundle-splitter';

const Scenes = (
    <Lightbox>
        <Scene
            key="rootLogin"
        >
            <Scene
                key="Login"
                component={register({require: () => require('../container/login')})}
                title={'Login'}
                hideNavBar
            />
            <Scene
                key="Main"
                component={register({require: () => require('../container/main')})}
                title={'Main'}
            />
        </Scene>
    </Lightbox>
);

const ExportRouter = () => {
    return (
        <Router>
            {Scenes}
        </Router>
    );
};

export default ExportRouter;
