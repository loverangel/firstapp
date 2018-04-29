/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

typeProps = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !==r2});
    this.state={
      message:"",dataSource:ds.cloneWithRows(['row1','row2','row3','row4','row5','row6','row7','row8','row9','row10'])
    };
  }
  _renderRow(rowDta,sectionID,rowID) {
    var THUMB_IMGS = [
      require('./assets/a0.png'),
      require('./assets/a1.png'),
      require('./assets/a2.png'),
      require('./assets/a3.png'),
      require('./assets/a4.png'),
      require('./assets/a5.png'),
      require('./assets/a6.png'),
      require('./assets/a7.png'),
      require('./assets/a8.png'),
      require('./assets/a9.png'),
    ]
    return (
        <TouchableOpacity>
          <View>
            <View style={style.row}>
              <image style={{width:40,height:40}} source={THUMB_IMGS[rowID]}>
              </image>
              <Text style={style.txt}>
                {rowID + '号的月饼'}
              </Text>
              <Text style={style.txt}>
                {'价格是：￥105'}
              </Text>
            </View>
            <View style={style.separator}/>
          </View>
        </TouchableOpacity>
    )
  }
  render(){
    return(
        <View>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
          </View>
    )
  }}
const style=StyleSheet.create({
      row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f6f6f6',
      },
      txt:{
        flex:1,fontSize:16,color:"black",marginLeft:20,
      },
      thumb:{
        width:50,
        height:50,
      },
      separator:{
        height:1,
        backgroundColor:'#CCCCCC',
      },
      container:{
        flex:1,
        justifyContent:'center',
        alignltems:'center',
        backgroundColor:'#F5FCFF',
      },
      welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
      },
      instructins:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
      },
    });






      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/