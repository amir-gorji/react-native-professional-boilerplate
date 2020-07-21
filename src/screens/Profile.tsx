import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '@services/NavigationService';
import routes from '@constants/navigationConstants/routes';

export interface ProfileProps {
  route: any
}

let Profile = (props: ProfileProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      {!!props.route.params?.customParam &&
        <Text style={{ fontSize: 16 }}>{props.route.params.customParam}</Text>
      }
      <Button
        title='Navigate to Home'
        onPress={() => {
          NavigationService.navigate(routes.Home, { customParam: 'navigated to the Home page' });
        }}
      />
      <Button
        title='reset stack going to Home'
        onPress={() => {
          NavigationService.resetStack(routes.Home);
        }}
      />
    </View>
  )
};

export default Profile;