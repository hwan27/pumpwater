import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppConatiner/presenter";

const { persistor, store } = configureStore();

class App extends React.Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;
    if (!isLoading) {
      return (
        <View style={styles.loading}>
          <Image source={require("./assets/images/sample.png")} />
        </View>
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/sample.png"),
        require("./assets/images/icon.png"),
        require("./assets/images/splash.png")
      ])
    ]);
  };
  _handleLoadingError = error => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    this.setState({ isLoading: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loading: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
