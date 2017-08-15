import {StackNavigator} from "react-navigation";

import {Flashcard} from "./Flashcard";
import {Settings} from "./Settings";
import {About} from "./About";

export const Routes = StackNavigator({
    Home: {screen: Flashcard},
    Settings: {screen: Settings},
    About: {screen: About}
})
