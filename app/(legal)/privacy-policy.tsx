import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../styles/styles";

export default function PrivacyPolicy() {
  return (
    <View>
      <Text style={styles.title}>Privacy Policy</Text>
      <Link href={"/(app)/"} style={styles.link}>
        Navegar a /
      </Link>
    </View>
  );
}
