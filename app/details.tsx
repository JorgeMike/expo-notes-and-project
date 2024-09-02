import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/styles";
import { Link, Stack } from "expo-router";

export default function Details() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#6F2CF6",
          },
          headerTintColor: "#fff",
        }}
      />
      <Text>Details</Text>
      <Link href="/settings" style={styles.link}>
        Go to Settings
      </Link>
    </View>
  );
}
