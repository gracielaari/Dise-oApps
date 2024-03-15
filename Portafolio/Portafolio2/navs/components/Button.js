import React from "react";
import {View, Text, Pressible, Pressable} from 'react-native';

export default function Button ({onPress}){
    return(
        <View>
            <Pressable onPress={onPress}>
               <Text>Ir a Profile</Text> 
            </Pressable>
        </View>
    );
}