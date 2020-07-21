import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '@services/NavigationService';
import routes from '@constants/navigationConstants/routes';

export interface HomeProps {
  route: any
}

let Home = (props: HomeProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      {!!props.route.params?.customParam &&
        <Text style={{ fontSize: 16 }}>{props.route.params.customParam}</Text>
      }
      <Button
        title='Navigate to profile'
        onPress={() => {
          NavigationService.navigate(routes.Profile, { customParam: 'navigated to the profile page' });
        }}
      />
      <Button
        title='reset stack going to profile'
        onPress={() => {
          NavigationService.resetStack(routes.Profile, { customParam: 'Now if you press back, the app closes' });
        }}
      />
      <Button
        title='replace the stack, just try it'
        onPress={() => {
          NavigationService.replaceStack([
            { name: routes.Settings, params: { customParam: 'Now if you press back, the app closes' } },
            { name: routes.Profile, params: { customParam: 'now press back button!' } }
          ]);
        }}
      />
    </View>
  )
};

export default Home;