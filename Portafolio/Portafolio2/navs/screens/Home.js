import React from "react";

import {View, Text} from 'react-native';
import Button from "../components/Button";

export default function Home({navigation}){
    return (
       <View>
        <Text>Home</Text>
            <Button 
            onPress ={() => {
                navigation.navigate('Profile')
            }}
            />
       </View> 
    );
}