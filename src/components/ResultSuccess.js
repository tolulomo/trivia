import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Block, Text, Button } from "galio-framework";
import { Styles, Images } from '../constants';
const { width } = Dimensions.get('screen');

const SuccessBox = (props) => {
  return (
    <Block>
      <Block>
        <Image source={Images.trophyImage} resizeMode="contain" style={{ width: width-40, height:350 }} />
      </Block>
      <Block style={Styles.uMarginBottom}>
        <Block center style={{paddingHorizontal: 10 }}>
          <Text style={Styles.resultText}>Congratulations!!!</Text>
        </Block>
      </Block>
      <Block center>
        <Button size="small" color="transparent" round onPress={props.restart}>
          Replay
        </Button>
      </Block>
    </Block>
  );
}

export default SuccessBox;