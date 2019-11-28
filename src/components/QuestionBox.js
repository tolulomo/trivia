import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Block } from 'galio-framework';
import { Styles, Apptheme } from '../constants';

const QuestionBox = (props) => {
  const { incorrect_answers, question, difficulty, correct_answer } = props.question;
  const ans0 = incorrect_answers[0];
  const ans1 = incorrect_answers[1];
  return (
    <Block middle center>
      <Block center card shadow space="between" style={[Styles.card, Styles.cardHeight]}>
        <Block flex style={Styles.question}>
          <Text size={Apptheme.SIZES.BASE * 1.125} style={Styles.uMarginBottom}>{question}</Text>
          <Text size={Apptheme.SIZES.BASE * 0.875} muted>{`Difficulty: ${difficulty}`}</Text>
        </Block>
        <Block row space="between" style={Styles.answer}>
          <Block middle flex={0.45}>
            <TouchableOpacity onPress={() => props.answer(ans0, correct_answer)}>
              <Text color={Apptheme.COLORS.SECONDARY}>{ans0}</Text>
            </TouchableOpacity>
          </Block>
          <Block middle flex={0.45} >
            <TouchableOpacity onPress={() => props.answer(ans1, correct_answer)}>
              <Text color={Apptheme.COLORS.SECONDARY}>{ans1}</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

export default QuestionBox;