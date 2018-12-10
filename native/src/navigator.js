import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import SiderMenu from './components/SiderMenu';

// Topic
import TopicList from './pages/topic/list';
import TopicDetail from './pages/topic/detail';
import TopicPublish from './pages/topic/publish';

// Auth
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import ForgetPass from './pages/auth/forgetPass';

// Setting
import Setting from './pages/setting';
import About from './pages/setting/about';

const DrawerNavigator = createDrawerNavigator({
  Home: TopicList,
  Setting: Setting,
}, {
  drawerWidth: 200,
  contentComponent: SiderMenu,
});

export default createStackNavigator({
  Main: DrawerNavigator,
  TopicDetail: TopicDetail,
  TopicPublish: TopicPublish,
  Signin: Signin,
  Signup: Signup,
  ForgetPass: ForgetPass,
  About: About,
}, {
  headerMode: 'none'
});
