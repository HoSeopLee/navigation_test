import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../components/Main';
import Sube from '../components/Sube';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Stack_Navigation(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
      initialRouteName="Aush">
      {/* 처음 로딩 화면 */}
      <Stack.Screen
        name="Main"
        options={{title: '', headerTransparent: true, headerShown: false}}
        component={Main}
      />
      <Stack.Screen
        name="Sube"
        options={{title: '', headerTransparent: true, headerShown: false}}
        component={Sube}
      />
    </Stack.Navigator>
  );
}

const Router = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        drawerStyle={{
          width: '100%',
          backgroundColor: '#000000',
        }}
        drawerContentOptions={{
          activeTintColor: '#212121',
          activeBackgroundColor: '#efefef',
          itemStyle: {
            color: '#212121',
          },
        }}
        // drawerPosition={'Left'} //기본값 Left
        // drawerContent={props => <Menu {...props} />}
      >
        <Drawer.Screen
          name="Splash_Navigation"
          component={Stack_Navigation}
          options={{drawerLabel: '스플래쉬 메인', swipeEnabled: false}}
        />
        {/* <Drawer.Screen  name="Stack_Navigation" component={Stack_Navigation} options={{ drawerLabel: '달톡', swipeEnabled: false, }} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
Router.defatulProps = {
  userInfo: null,
};
