import React from "react";
import { LinearGradient } from 'expo';
import { Styles } from '../constants';

const Background = (props) => (
    <LinearGradient
        colors={!props.colors ? ['#ad5389', '#3c1053'] : props.colors}
        end={!props.end ? [0.5, 0.9]:props.end}
        start={props.start && props.start}
        style={!props.left ? Styles.appBackground : [Styles.gradient, Styles.left]}
>{props.children}</LinearGradient>
);

export default Background;
