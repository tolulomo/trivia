import React from "react";
import { Provider } from "react-redux";
import { Block, GalioProvider } from 'galio-framework';
import Store from './src/redux/index'; 
import Screens from './src/routes/Screens';
import { Apptheme, Fonts } from './src/constants';

export default class App extends React.Component {

  render() {
  
    return (
      <Provider store={Store}>
        <GalioProvider theme={Apptheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </Provider>
    );
  }
}
