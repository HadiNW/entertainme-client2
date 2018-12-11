import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import MovieNavigator from './MovieNavigator'
import TvNavigator from './TvNavigator'
import AddMovie from '../Screens/AddMovie'

const AppNavigator = createDrawerNavigator({
  Movies: {
    screen: MovieNavigator
  },
  Tv: {
      screen: TvNavigator
  },
  Data: {
    screen: AddMovie
  }
});

const App = createAppContainer(AppNavigator);
export default App;