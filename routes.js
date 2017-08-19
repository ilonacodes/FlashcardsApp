import {StackNavigator} from "react-navigation";

import {Flashcard} from "./Flashcard";
import {Settings} from "./Settings";
import {About} from "./About";
import {Libraries} from "./Libraries";

export const Routes = StackNavigator({
    Home: {screen: Flashcard},
    Settings: {screen: Settings},
    About: {screen: About},
    Libraries: {screen: Libraries}
})
