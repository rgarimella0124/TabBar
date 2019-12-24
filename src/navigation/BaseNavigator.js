import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { MultiBar, MultiBarToggle } from "react-native-multibar";

import { Bookmarks, Likes, Private, Profile, Settings } from "../components";
import { Routes } from "./Routes";

const TabsNavigator = createBottomTabNavigator(
  {
    [Routes.TabsBookmarks]: {
      screen: Bookmarks,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="bookmark" color={tintColor} size={24} />
        )
      })
    },
    [Routes.TabsLikes]: {
      screen: Likes,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="heart" color={tintColor} size={24} />
        )
      })
    },
    MultiBar: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <MultiBarToggle
            navigation={navigation}
            actionSize={30}
            routes={[
              {
                routeName: Routes.OtherScreen,
                color: "#FF8360",
                icon: <FontAwesome name="rocket" color="#333333" size={15} />
              },
              {
                routeName: Routes.OtherScreen,
                color: "#E8E288",
                icon: <FontAwesome name="dashboard" color="#333333" size={15} />
              },
              {
                routeName: Routes.OtherScreen,
                color: "#7DCE82",
                icon: <FontAwesome name="gears" color="#333333" size={15} />
              }
            ]}
            icon={<FontAwesome name="plus" color="#FFFFFF" size={24} />}
          />
        )
      }),
      params: {
        navigationDisabled: true
      }
    },
    [Routes.TabsPrivate]: {
      screen: Private,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="lock" color={tintColor} size={24} />
        )
      })
    },
    [Routes.TabsProfile]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarComponent: MultiBar,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#586589",
      style: {
        backgroundColor: "#171F33"
      },
      tabStyle: {}
    }
  }
);

const BaseNavigatorContainer = createAppContainer(
  createStackNavigator(
    {
      [Routes.Tabs]: TabsNavigator,
      [Routes.OtherScreen]: Settings
    },
    {
      headerMode: "none"
    }
  )
);

export { BaseNavigatorContainer as BaseNavigator };
