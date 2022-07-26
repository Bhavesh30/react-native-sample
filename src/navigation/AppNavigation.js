import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import SignInScreen from '../containers/Auth/SignInScreen';
import SignUpScreen from '../containers/Auth/SignUpScreen';
import ForgotPasswordScreen from '../containers/Auth/ForgotPasswordScreen';

import HomeScreen from '../containers/Home/HomeScreen';
import ProfileScreen from '../containers/Profile/ProfileScreen';

import {TaskDemo} from '../containers/Task/TaskDemo';

import AppLoader from '../components/AppLoader';

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign In',
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
          headerShown: true,
          headerTransparent: true,
        }}
      />
    </AuthStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const TaskStack = createStackNavigator();

function TaskStackScreen() {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="Task"
        component={TaskDemo}
        options={{
          headerShown: false,
        }}
      />
    </TaskStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();

// function TabStackScreen() {
//   return (
//     <Tab.Navigator
//       tabBar={props => <MyTabBar {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStackScreen}
//         options={{
//           title: 'Home',
//         }}
//       />
//       <Tab.Screen
//         name="ProfileStack"
//         component={ProfileStackScreen}
//         options={{
//           title: 'Profile',
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="TaskStack"
        component={TaskStackScreen}
        options={{
          title: 'Tasks',
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

// function MyTabBar({state, descriptors, navigation}) {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         const iconImage = () => {
//           switch (label) {
//             case 'Home':
//               return isFocused
//                 ? require('../assets/images/HomeIcon-selected.png')
//                 : require('../assets/images/HomeIcon.png');
//             case 'Profile':
//               return isFocused
//                 ? require('../assets/images/ProfileIcon-selected.png')
//                 : require('../assets/images/ProfileIcon.png');
//             default:
//               return isFocused
//                 ? require('../assets/images/HomeIcon-selected.png')
//                 : require('../assets/images/HomeIcon.png');
//           }
//         };

//         return (
//           <TouchableOpacity
//             key={route.key}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: 84,
//             }}>
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: 'center',
//               }}>
//               <Image style={{alignSelf: 'center'}} source={iconImage()} />
//               <Text
//                 style={{
//                   color: isFocused ? '#007AFF' : '#222',
//                   fontSize: 10,
//                   paddingTop: 5,
//                   alignSelf: 'center',
//                 }}>
//                 {label}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const AppNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth?.isLoggedIn);

  const appLoading = useSelector(state => state.appLoader?.appLoading);

  if (appLoading === true) {
    return <AppLoader />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedIn ? (
          //<Stack.Screen name="Home" component={TabStackScreen} />
          <Stack.Screen name="Home" component={MyDrawer} />
        ) : (
          <Stack.Screen
            name="SignInStack"
            component={AuthStackScreen}
            options={{
              title: 'Sign In',
              headerShown: false,
              headerTransparent: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
