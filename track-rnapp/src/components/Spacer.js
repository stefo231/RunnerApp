import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.containerSpacer}>{children}</View>;
};

export default Spacer;

const styles = StyleSheet.create({
  containerSpacer: {
    margin: 15
  }
});
