import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuthentication } from '../../hooks/useAuthentication';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../config/firebaseConfig'

const CustomDrawerContent = (props) => {

  const { user } = useAuthentication();
  const auth = getAuth(app);

  const handleSignOut = () => {
    if (user) {
      signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };
    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Menu"
            onPress={() => props.navigation.toggleDrawer()}
            icon={({ focused, color, size }) => (
              <Icon
                name="menu"
                size={size}
                color={color}
              />
            )}
            
          />
          <DrawerItem
            label="Sign Out"
            onPress={handleSignOut}
            icon={({ focused, color, size }) => (
              <Icon
                name="sign-out"
                type="font-awesome"
                size={size}
                color={color}
              />
            )}
          />
        </DrawerContentScrollView>
      );
}

export default CustomDrawerContent

const styles = StyleSheet.create({})