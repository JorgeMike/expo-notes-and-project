import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../styles/styles";

export default function Home() {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Link href={"/(app)/settings"} style={styles.link}>
        Navegar a /settings
      </Link>
    </View>
  );
}
