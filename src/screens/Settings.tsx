import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '@services/NavigationService';
import routes from '@constants/navigationConstants/routes';

export interface SettingsProps {
  route: any
}

let Settings = (props: SettingsProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      {!!props.route.params?.customParam &&
        <Text style={{ fontSize: 16 }}>{props.route.params.customParam}</Text>
      }
      <Button
        title='reset stack going to Home'
        onPress={() => {
          NavigationService.resetStack(routes.Home);
        }}
      />
      <Button
        title='navigate to Home'
        onPress={() => {
          NavigationService.navigate(routes.Home);
        }}
      />
      <Button
        title='navigate to profile'
        onPress={() => {
          NavigationService.navigate(routes.Profile);
        }}
      />
    </View>
  )
};

export default Settings;