import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";
const { persistor, store } = configureStore();
const { width, height } = Dimensions.get("window");

store.dispatch({ type: "LOG_OUT" });

class App extends React.Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;
    if (!isLoading) {
      return (
        <View style={styles.container}>
          <Image
            source={require("./assets/images/loadingLogo.png")}
            style={{ resizeMode: "contain", width: width * 0.3 }}
          />
        </View>
      );
    }
    return (
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <AppContainer />
        {/* </PersistGate> */}
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
