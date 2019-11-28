import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Block, Text, Button } from "galio-framework";
import Background from './Background';
import { Styles, Apptheme } from '../constants';
const { width } = Dimensions.get('screen');

const renderFailedItems = ({item,index}) => {
    const gradientColors = index % 2 ? Apptheme.COLORS.GRADIENT_BLUE : Apptheme.COLORS.GRADIENT_PINK;
    return (
      <Block row center card shadow space="between" style={Styles.card}>
        <Background
          start={[0.45, 0.45]}
          end={[0.90, 0.90]}
          colors={gradientColors}
          left = {true}
        >
          <Text> {index+1}</Text>
        </Background>
        <Block flex>
          <Text size={Apptheme.SIZES.BASE*0.8 }>{item.question}</Text>
          <Text size={Apptheme.SIZES.BASE * 0.673} muted>{`Correct Answer: ${item.correct_answer}`}</Text>
        </Block>
      </Block>
    );
}

const FailedBox = (props) => {
    const { failed, answer } = props;
    const total = failed.length + answer;
    return(
        <Block flex>
        <Block center row style={[Styles.uMarginBottom,Styles.uMarginTop]}>
            <Text style={Styles.resultText}>You scored</Text>
            <Text style={[Styles.resultText, Styles.resultTextWin]}> {answer}</Text>
        </Block>
        <Block center row style={Styles.uMarginBottomLarge}>
            <Text style={Styles.resultText}>Out of </Text>
            <Text style={[Styles.resultText, Styles.resultTextTotal]}> {total}</Text>
        </Block>
        <Block flex style={Styles.uMarginBottomLarge}>
            <FlatList
                data={failed}
                alwaysBounceVertical={true}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                keyExtractor={item => item.question}
                contentContainerStyle={{width: width-Apptheme.SIZES.BASE*0.8}}
                renderItem={renderFailedItems}
            />
        </Block>
        <Block center style={Styles.uMarginBottom}>
            <Button size="small" color="transparent" round onPress={props.restart}>
            Try Again
            </Button>
        </Block>
        </Block>
    );
}

export default FailedBox;