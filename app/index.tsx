import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/styles";
import { Link } from "expo-router";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/details" style={styles.link}>
        Go to Details
      </Link>
    </View>
  );
}
