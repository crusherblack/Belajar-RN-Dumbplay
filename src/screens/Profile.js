import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {handleLogout} from '../redux/actions/auth';

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
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
          }}
          onPress={() => dispatch(handleLogout())}>
          Log Out | {auth.isAuthenticated && 'Login State'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
