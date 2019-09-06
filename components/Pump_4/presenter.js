import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");

const Pump_4 = props => (
  <View>
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/whitePump.gif")}
        style={{
          // resizeMode: "contain",
          width: width,
          padding: 20,
          position: "relative",
          alignItems: "center"
        }}
        imageStyle={{ resizeMode: "contain", height: height * 0.1 }}
      >
        <View style={{ height: height * 0.07, width: width }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#678293",
              position: "absolute",
              top: height * 0.05 - 20,
              left: width * 0.7,
              marginTop: -15
            }}
          >
            1번 펌프
          </Text>
        </View>
      </ImageBackground>
    </View>

    <View
      style={{
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 10,
        marginBottom: 20,
        horizontalAlign: "center",
        marginLeft: 15
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 3,
          borderRadius: 8,
          flexDirection: "row",
          padding: 10
        }}
      >
        {props.pump_1_auto ? (
          <Text style={styles.inputRed}>자동</Text>
        ) : (
          <Text style={styles.inputBlue}>수동</Text>
        )}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            borderRadius: 8,
            padding: 8,
            marginLeft: 5,
            width: width * 0.7
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              가동률:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_1_operating_rate} %
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전류:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_1_current} A
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              주파수:
            </Text>

            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_1_freq} Hz
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전력:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_1_power} kw
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/whitePump.gif")}
        style={{
          width: width,
          padding: 20,
          position: "relative",
          alignItems: "center"
        }}
        imageStyle={{ resizeMode: "contain", height: height * 0.1 }}
      >
        <View style={{ height: height * 0.07, width: width }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#678293",
              position: "absolute",
              top: height * 0.05 - 20,
              left: width * 0.7,
              marginTop: -15
            }}
          >
            2번 펌프
          </Text>
        </View>
      </ImageBackground>
    </View>

    <View
      style={{
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 10,
        marginBottom: 20,
        horizontalAlign: "center",
        marginLeft: 15
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 3,
          borderRadius: 8,
          flexDirection: "row",
          padding: 10
        }}
      >
        {props.pump_2_auto ? (
          <Text style={styles.inputRed}>자동</Text>
        ) : (
          <Text style={styles.inputBlue}>수동</Text>
        )}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            borderRadius: 8,
            padding: 8,
            marginLeft: 5,
            width: width * 0.7
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              가동률:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_2_operating_rate} %
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전류:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_2_current} A
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              주파수:
            </Text>

            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_2_freq} Hz
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전력:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_2_power} kw
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/whitePump.gif")}
        style={{
          // resizeMode: "contain",
          width: width,
          padding: 20,
          position: "relative",
          alignItems: "center"
        }}
        imageStyle={{ resizeMode: "contain", height: height * 0.1 }}
      >
        <View style={{ height: height * 0.07, width: width }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#678293",
              position: "absolute",
              top: height * 0.05 - 20,
              left: width * 0.7,
              marginTop: -15
            }}
          >
            3번 펌프
          </Text>
        </View>
      </ImageBackground>
    </View>

    <View
      style={{
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 10,
        marginBottom: 20,
        horizontalAlign: "center",
        marginLeft: 15
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 3,
          borderRadius: 8,
          flexDirection: "row",
          padding: 10
        }}
      >
        {props.pump_3_auto ? (
          <Text style={styles.inputRed}>자동</Text>
        ) : (
          <Text style={styles.inputBlue}>수동</Text>
        )}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            borderRadius: 8,
            padding: 8,
            marginLeft: 5,
            width: width * 0.7
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              가동률:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_3_operating_rate} %
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전류:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_3_current} A
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              주파수:
            </Text>

            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_3_freq} Hz
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전력:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_3_power} kw
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View />
    </View>
    <View style={styles.header}>
      <ImageBackground
        source={require("../../assets/images/whitePump.gif")}
        style={{
          // resizeMode: "contain",
          width: width,
          padding: 20,
          position: "relative",
          alignItems: "center"
        }}
        imageStyle={{ resizeMode: "contain", height: height * 0.1 }}
      >
        <View style={{ height: height * 0.07, width: width }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#678293",
              position: "absolute",
              top: height * 0.05 - 20,
              left: width * 0.7,
              marginTop: -15
            }}
          >
            4번 펌프
          </Text>
        </View>
      </ImageBackground>
    </View>

    <View
      style={{
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 10,
        marginBottom: 20,
        horizontalAlign: "center",
        marginLeft: 15
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 3,
          borderRadius: 8,
          flexDirection: "row",
          padding: 10
        }}
      >
        {props.pump_4_auto ? (
          <Text style={styles.inputRed}>자동</Text>
        ) : (
          <Text style={styles.inputBlue}>수동</Text>
        )}
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 3,
            borderRadius: 8,
            padding: 8,
            marginLeft: 5,
            width: width * 0.7
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              가동률:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_4_operating_rate} %
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전류:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_4_current} A
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#678293", fontSize: 16, fontWeight: "400" }}>
              주파수:
            </Text>

            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_4_freq} Hz
              </Text>
            </View>

            <Text
              style={{
                marginLeft: 3,
                color: "#678293",
                fontSize: 16,
                fontWeight: "400"
              }}
            >
              전력:
            </Text>
            <View style={{ width: width * 0.23, marginLeft: 3 }}>
              <Text
                style={{
                  color: "#00a5dd",
                  fontSize: 16,
                  fontWeight: "400"
                }}
              >
                {props.pump_4_power} kw
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  // town: {
  //   width: width * 0.3,
  //   height: 50,
  //   paddingHorizontal: 10,
  //   paddingVertical: 20,
  //   backgroundColor: "#fff",
  //   borderRadius: 35,
  //   margin: width * 0.05
  // },
  header: {
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    color: "#397999"
  },
  input: {
    color: "#678293",
    fontSize: 20,
    fontWeight: "400",
    marginRight: 5  
  },
  inputBlue: {
    color: "#00a5dd",
    fontSize: 18,
    fontWeight: "400"
    //marginRight: 5
  },
  inputRed: {
    color: "#f7727f",
    fontSize: 18,
    fontWeight: "400"
    // marginRight: 5
  }
});

//export default withNavigation(Pump_4);
export default Pump_4;
