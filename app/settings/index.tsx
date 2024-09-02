import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function Settings() {
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      title: "XD",
      headerStyle: {
        backgroundColor: "#ff9878",
      },
      headerTintColor: "#fff",
    });
  }, []);

  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
