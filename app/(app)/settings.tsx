import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../styles/styles";

export default function Settings() {
  return (
    <View>
      <Text style={styles.title}>Settings</Text>
      <Link href={"/(legal)/terms-of-services"} style={styles.link}>
        Navegar a /terms-of-policy
      </Link>
    </View>
  );
}
