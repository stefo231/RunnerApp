import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        sumbitButtonText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        routeName="SignUp"
        text="Don't have an account? Sign Up instead"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});
