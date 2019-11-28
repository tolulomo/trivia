import React from 'react';
import { withNavigation } from 'react-navigation';
import { Block, NavBar } from 'galio-framework';
import { Styles, Apptheme } from '../constants'

class Header extends React.Component {
  
  render() {
    const { title, white, transparent, bgColor, navigation, ...props } = this.props;
    // console.log(navigation);
    const { state } = navigation;
    const noShadow = ['Onboarding'].includes(state.routeName);

    //Header Styling
    const headerStyles = [
      !noShadow ? Styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];
    const navbarStyles = [
      Styles.navbar,

      //Add your desired background if white is not preferrable.
      bgColor && { backgroundColor: bgColor }  
    ];


    if(!title) {
      return <Block />
    }

    return (
      <Block style={headerStyles}>
        <NavBar
          title={title}
          style={navbarStyles}
          transparent={transparent}
          titleStyle={[
            Styles.title,
            { color: Apptheme.COLORS[white ? 'WHITE' : 'LABEL'] }
          ]}
          {...props}
        />
      </Block>
    );
  }
}

export default withNavigation(Header);