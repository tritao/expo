import { StackScreenProps } from '@react-navigation/stack';
import { AllStackRoutes } from 'navigation/Navigation.types';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { StyledView } from '../components/Views';
import Colors from '../constants/Colors';
import isUserAuthenticated from '../utils/isUserAuthenticated';
import Explore from '../containers/Explore';

export default function ExploreScreen({
  navigation,
}: StackScreenProps<AllStackRoutes, 'ExploreAndSearch'>) {
  const isAuthenticated = useSelector(data => isUserAuthenticated(data.session));

  const onUsernamePressed = React.useCallback(
    (username: string) => {
      navigation.push('Profile', { username });
    },
    [navigation]
  );

  return (
    <StyledView
      style={{ flex: 1 }}
      darkBackgroundColor="#000"
      lightBackgroundColor={Colors.light.greyBackground}>
      <Explore
        filter="FEATURED"
        key={isAuthenticated ? 'authenticated' : 'guest'}
        onPressUsername={onUsernamePressed}
      />
    </StyledView>
  );
}
