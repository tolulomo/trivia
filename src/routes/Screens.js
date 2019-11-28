import React from "react";
import { Easing, Animated } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Block } from "galio-framework";
// screens
import Home from "../screens/home";
import Quiz from "../screens/quiz";
import QuizResult from "../screens/results";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = 'Onboarding';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const OnboardStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} transparent title=""  />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const QuizStack = createStackNavigator(
  {
    Quiz: {
      screen: Quiz,
      navigationOptions: ({ navigation }) => ({
        header: <Header left={<Block />} title={navigation.getParam('title', 'Trivia Challenge')} />
      })
    },
    QuizResult: {
      screen: QuizResult,
      navigationOptions: ({ navigation }) => ({
        header: (<Header left={<Block />} title="" />),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);


const AppContainer = createAppContainer(createSwitchNavigator({
  Onboarding: {
    screen: OnboardStack,
  },
  Quiz: {
    screen: QuizStack,
  }},
  {
    initialRouteName: 'Onboarding',
  }
));

export default AppContainer;