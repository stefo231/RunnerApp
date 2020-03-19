import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignUpScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
