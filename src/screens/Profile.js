import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout} from '../redux/actions/auth';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1f1d1d',
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 9,
          padding: 15,
          borderRadius: 5,
          backgroundColor: '#EE4622',
        }}
        onPress={() => dispatch(handleLogout())}>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 18,
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
