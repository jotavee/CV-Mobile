import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../pages/Main/index.js'
import Locals from '../pages/Locals/index.js'
import UserPage from '../pages/UserPage/index.js'

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        Locals,
        UserPage
    })
)

export { Routes }
