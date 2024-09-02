import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../../styles/styles";

export default function TermsOfServices() {
  return (
    <View>
      <Text style={styles.title}>Terms of services</Text>
      <Link href={"/(legal)/privacy-policy"} style={styles.link}>
        Navegar a /privacy-policy
      </Link>
    </View>
  );
}
