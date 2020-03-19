import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer"; // for magins..

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate("SignIn")} />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});
