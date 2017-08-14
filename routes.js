import {StackNavigator} from "react-navigation";

import {Flashcard} from "./Flashcard";
import {Settings} from "./Settings";

export const Routes = StackNavigator({
    Home: {screen: Flashcard},
    Settings: {screen: Settings},
})