
// import Styles from '../constants/styles';
import React from 'react';
import { StatusBar, Image, Dimensions } from 'react-native';

// galio components
import { Text, Button, Block } from 'galio-framework';
import { Background } from '../components';
import { Styles, Images, Apptheme } from '../constants';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  navigate = () => {
    return this.props.navigation.navigate('Quiz');
  }

  render(){
    return (
      <Block flex={1}>
        <StatusBar hidden={true} />
        <Background />
        <Block flex center style={Styles.container}>
          <Block flex middle style={Styles.containerIntro}>
            <Text center size={Apptheme.SIZES.BASE * 2.175} color={Apptheme.COLORS.WHITE} style={{ marginBottom: Styles.containerAdjust }}>
              Welcome to the Trivia Challenge!
            </Text>
            <Text center size={Apptheme.SIZES.BASE * 0.775} color={Apptheme.COLORS.WHITE} style={{ paddingHorizontal: Styles.containerAdjust }}>
              You will be presented with 10 True or False questions.
            </Text>
            <Text center size={Apptheme.SIZES.BASE * 0.775} color={Apptheme.COLORS.WHITE} style={{ marginBottom: Styles.containerAdjust * 1.875, paddingHorizontal: Styles.containerAdjust * 2 }}>
              Can you score 100%?
            </Text>
            <Button size="small" color="transparent" round onPress={this.navigate}>
              Begin
            </Button>
          </Block>
          <Block flex style={Styles.uMarginBottomLarge}>
            <Image source={Images.introImage} resizeMode="contain" style={{ width: width-40 }} />
          </Block>
        </Block>
      </Block>
    )
  }
}

export default Home;
