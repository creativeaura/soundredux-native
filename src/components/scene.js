var React = require('react-native');
var {
  StyleSheet,
  View,
  Dimensions,
} = React;

var deviceWidth = Dimensions.get('window').width;

import Header from './Header';
import Player from './Player';
// import Song from './Song';
import Songs from './Songs';
// import User from './User';

class Scene extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View style={styles.container}>
        <Header />
        <Songs />
        <Player />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default Scene
