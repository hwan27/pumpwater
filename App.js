import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, Alert } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";
import firebase from "react-native-firebase";

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
            source={require("./assets/images/cjswlLogo02.png")}
            style={{ resizeMode: "contain", width: width * 0.5 }}
          />
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
  componentDidMount = async () => {
    // this._checkPermission();
    // this._createNotificationListeners();
    //this._listenForNotifications();
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 2000);
  };
  componentWillUnMount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  // _checkPermission = async () => {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     console.log(enabled);
  //     this._updateTokenToServer();
  //   } else {
  //     this._requestPermission();
  //   }
  // };

  async _createNotificationListeners() {
    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        const { title, body } = notification;
        console.log(notification);
      });
    this.notificationListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        console.log("onNotificationOpen:");
      });
    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
    }
    this.messageListener = firebase.messaging().onMessage(message => {
      console.log(JSON.stringify(message));
    });
  }

  // async _requestPermission() {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     await this._updateTokenToServer();
  //   } catch (error) {
  //     alert("You can't handle push notification");
  //   }
  // }

  // async _updateTokenToServer() {
  //   const fcmToken = await firebase.messaging().getToken();
  //   console.log(fcmToken);
  //   Alert.alert(fcmToken);

  //   const header = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //       Cache: "no-cache"
  //     },
  //     body: JSON.stringify({
  //       user_id: "CURRENT_USER_ID",
  //       firebase_token: fcmToken
  //     }),
  //     credentials: "include"
  //   };
  //   const url = "http://180.66.153.61:8080";
  // }

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

_listenForNotifications = async () => {
  // onNotificationDisplayed - ios only

  this.notificationListener = firebase
    .notifications()
    .onNotification(notification => {
      console.log("onNotification", notification);
    });

  this.notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened(notificationOpen => {
      console.log("onNotificationOpened", notificationOpen);
    });

  const notificationOpen = await firebase
    .notifications()
    .getInitialNotification();
  if (notificationOpen) {
    console.log("getInitialNotification", notificationOpen);
  }
};
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
