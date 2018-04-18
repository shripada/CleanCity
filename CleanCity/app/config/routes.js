import { TabNavigator } from 'react-navigation';

import HomeScreen from './../screens/home';
import SearchScreen from './../screens/search';
import CreatePostScreen from './../screens/create-post';
import SettingsScreen from './../screens/settings';

export default TabNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  CreatePost: { screen: CreatePostScreen },
  Settings: { screen: SettingsScreen },
});
