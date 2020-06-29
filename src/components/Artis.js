import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

class Artis extends Component {
  constructor(props) {
    super(props);
  }

  goToDetails = (item) => {
    this.props.navigation.navigate('Settings', {item, item});
  };

  render() {
    let categories = [
      {
        name: 'Imagine Dragons',
        img: require('../Assets/imagine.jpg'),
      },
      {
        name: 'The Script',
        img: require('../Assets/script.jpg'),
      },
      {
        name: 'Ed Sheeren',
        img: require('../Assets/edsheren.jpg'),
      },
      {
        name: 'Eminem',
        img: require('../Assets/eminem.jpg'),
      },
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Artist</Text>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback onPress={() => this.goToDetails(item)}>
                <Surface style={styles.surface}>
                  <ImageBackground
                    source={item.img}
                    style={styles.img}
                    blurRadius={0}>
                    <Icon name="play-circle" color="#fff" size={22} />
                    <Text style={styles.name}>{item.name}</Text>
                  </ImageBackground>
                </Surface>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }
}

export default Artis;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EE4622',
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    elevation: 15,
    height: 150,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 15,
    overflow: 'hidden',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
