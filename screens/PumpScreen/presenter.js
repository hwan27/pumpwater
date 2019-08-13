import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  ImageBackground,
  Alert
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Pump_1 from "../../components/Pump_1";
import Pump_2 from "../../components/Pump_2";
import Pump_3 from "../../components/Pump_3";
import Pump_4 from "../../components/Pump_4";
import Grid from "react-native-grid-component";
import { Icon } from "native-base";

const { width, height } = Dimensions.get("window");

// _renderItem = (data, i) => (
//   <View style={[{ backgroundColor: data }, styles.item]} key={i} />
// );

// _renderPlaceholder = i => <View style={styles.item} key={i} />;

const PumpScreen = props => (
  // <View style={{ flex: 1, justifyContent: "center" }}>
  //   <Modal
  //     animationType="fade"
  //     transparent={true}
  //     visible={props.modalVisible}
  //     style={{
  //       justifyContent: "center"
  //     }}
  //   >
  //     <View style={styles.modalBG}>
  //       <View
  //         style={{
  //           justifyContent: "center",
  //           backgroundColor: "white",
  //           alignItems: "center",
  //           height: height * 0.6,
  //           width: width * 0.8,
  //           position: "absolute",
  //           top: height * 0.2,
  //           right: width * 0.1,

  //           flex: 1
  //         }}
  //       >
  //         {/* <View style={styles.popupBar}></View> */}

  //         <View
  //           style={{
  //             marginTop: 30,
  //             flexDirection: "row"
  //           }}
  //         >
  //           <TouchableOpacity
  //             style={{ flex: 1, alignItems: "center", padding: 10 }}
  //             onPress={() => {
  //               props.setModalVisible(false);
  //             }}
  //           >
  //             <Text style={{ fontSize: 20 }}>취소</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   </Modal>
  <View style={{ flexDirection: "row" }}>
    <ScrollView
      horizontal={false}
      style={{ flexDirection: "row" }}
      contentContainerStyle={[styles.djWJrn]}
      refreshControl={
        <RefreshControl
          refreshing={props.isFetching || props.isRefreshing}
          onRefresh={props.refresh}
          tintColor={"black"}
        />
      }
    >
      {/* <Grid
      styles={styles.container}
      itemPerRow={3}
      renderItem={this._renderItem}
      renderItem={this._renderPlaceholder}
      data={["black"]}
    > */}
      <View styles={styles.container}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.name}>
              <Text style={styles.nameText1}>
                모뎀: {props.sectorFeed && props.sectorFeed.modem_number}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                elevation: 3,
                borderRadius: 8,
                flexDirection: "row",
                padding: 10,
                marginTop: 20,
                marginLeft: 13,
                height: width * 0.12
              }}
            >
              <TouchableOpacity
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <Text
                  style={{ color: "#00a5dd", fontSize: 20, fontWeight: "400" }}
                >
                  지도
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {props.modalVisible ? (
          <View style={styles.map_view}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: parseFloat(props.sectorFeed && props.sectorFeed.lat),
                longitude: parseFloat(props.sectorFeed && props.sectorFeed.lon),
                latitudeDelta: 0.005,
                longitudeDelta: 0.005 * (width / height)
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: parseFloat(
                    props.sectorFeed && props.sectorFeed.lat
                  ),
                  longitude: parseFloat(
                    props.sectorFeed && props.sectorFeed.lon
                  )
                }}
              />
            </MapView>
          </View>
        ) : null}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.buttonRed}>
            <Text style={styles.buttonText}>접속 상태 :</Text>
            {props.isRefreshing ? (
              <Text style={styles.buttonTextBlue}>접속 중</Text>
            ) : (
              <Text style={styles.buttonTextRed}>접속 종료</Text>
            )}
          </View>

          {props.isRefreshing ? (
            <TouchableOpacity style={styles.buttonGray}>
              <Text style={styles.buttonText1}>접속 요청</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonBlue}
              onPress={props.refreshInterval}
            >
              <Text style={styles.buttonText1}>접속 요청</Text>
            </TouchableOpacity>
          )}
          {/* 
          <TouchableOpacity
            style={props.isRefreshing ? styles.buttonGray : styles.buttonBlue}
            onPress={props.refreshInterval}
          >
            <Text style={styles.buttonText1}>접속 요청</Text>
          </TouchableOpacity> */}
        </View>

        {/* <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>펌프 설정</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>암호 변경</Text>
    </TouchableOpacity>
    </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {props.sectorFeed &&
            props.sectorFeed.suction_pressure == "" ? null : (
              <View style={styles.pressure}>
                <Text style={styles.pressureFontBig}>흡입압력</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>
                    {props.sectorFeed && props.sectorFeed.suction_pressure}
                  </Text>
                  <Text style={styles.pressureFont}>Bar</Text>
                </View>
              </View>
            )}
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {props.sectorFeed && props.sectorFeed.discharge == "" ? null : (
              <View style={styles.pressure}>
                <Text style={styles.pressureFontBig}>유량</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>{props.sectorFeed && props.sectorFeed.discharge}</Text>
                  <Text style={styles.pressureFont}>m^3/s</Text>
                </View>
              </View>
            )}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={styles.pressureUnder}>
              <Text style={styles.pressureFontBig}>토출압력</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text>
                  {props.sectorFeed && props.sectorFeed.discharge_pressure}
                </Text>
                <Text style={styles.pressureFont}>Bar</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={styles.pressureUnder}>
              <Text style={styles.pressureFontBig}>설정압력</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 32,
                  width: 70
                }}
              >
                {/* <Text>기존</Text>
                <Text>{props.sectorFeed && props.sectorFeed.set_pressure}</Text> */}
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  onChangeText={props.set_pressure}
                  placeholder={
                    props.sectorFeed && props.sectorFeed.set_pressure
                  }
                  value={props.setPressure ? String(props.setPressure) : null}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "#00a5dd",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 8,
                    height: 38,
                    width: 60,
                    borderRadius: 3
                  }}
                  onPress={props.update_pressure}
                >
                  <Text style={{ fontSize: 15, color: "white", margin: 3 }}>
                    입력
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: width,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <View>
            <Text
              style={{
                backgroundColor: "#00a5dd",
                color: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 15,
                fontWeight: "500",
                elevation: 3,
                borderRadius: 5,
                marginTop: 20
              }}
            >
              최종 업데이트:{" "}
              {props.sectorFeed && props.sectorFeed.updated_at.slice(0, 4)}년{" "}
              {props.sectorFeed && props.sectorFeed.updated_at.slice(5, 7)}월{" "}
              {props.sectorFeed && props.sectorFeed.updated_at.slice(8, 10)}일{" "}
              {props.sectorFeed && props.sectorFeed.updated_at.slice(11, 19)}
            </Text>
            {/* <Text>
              {(Date.now() - Date.parse(props.sectorFeed.updated_at)) /
                3600000 >
              2
                ? "False"
                : "True"}
            </Text> */}
          </View>
          {/* <View style={{ height: height * 0.3, width: width }}> */}
          <View
            style={{ flexDirection: "column", display: "flex", marginTop: 30 }}
          >
            {/* {props.sectorFeed && props.sectorFeed.pump_count == 1 ? (
              <Pump_1 {...props.sectorFeed} />
            ) : null} */}
            {/* {props.sectorFeed && props.sectorFeed.pump_count == 2 ? (
              <Pump_2 {...props.sectorFeed} />
            ) : null} */}
            {props.sectorFeed && props.sectorFeed.pump_count == 1 ? (
              <Pump_1 {...props.sectorFeed} />
            ) : props.sectorFeed && props.sectorFeed.pump_count == 2 ? (
              <Pump_2 {...props.sectorFeed} />
            ) : props.sectorFeed && props.sectorFeed.pump_count == 3 ? (
              <Pump_3 {...props.sectorFeed} />
            ) : props.sectorFeed && props.sectorFeed.pump_count == 4 ? (
              <Pump_4 {...props.sectorFeed} />
            ) : null}

            {/* {props.sectorFeed &&
              props.sectorFeed.pump_set.map(pump => (
                <Pump {...pump} key={pump.id} />
              ))} */}
          </View>

          {/* <TouchableOpacity
          onPress={() => {
            props.setModalVisible(true, 1);
          }}
        >
          <Image
            source={require("../../assets/images/pump_02.gif")}
            style={{
              resizeMode: "contain",
              width: width * 0.8,
              marginBottom: -20
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.setModalVisible(true, 2);
          }}
        >
          <Image
            source={require("../../assets/images/pump_01.gif")}
            style={{ resizeMode: "contain", width: width * 0.8 }}
          />
        </TouchableOpacity> */}
          {props.sectorFeed &&
          (!props.sectorFeed.pump_open &&
            !props.sectorFeed.low_pressure &&
            !props.sectorFeed.pump_1_low_water &&
            !props.sectorFeed.pump_2_low_water &&
            !props.sectorFeed.pump_3_low_water &&
            !props.sectorFeed.pump_4_low_water &&
            props.sectorFeed.pump_1_disorder_a == "0000" &&
            props.sectorFeed.pump_1_disorder_b == "0000" &&
            props.sectorFeed.pump_2_disorder_b == "0000" &&
            props.sectorFeed.pump_3_disorder_a == "0000" &&
            props.sectorFeed.pump_3_disorder_b == "0000" &&
            props.sectorFeed.pump_4_disorder_a == "0000" &&
            props.sectorFeed.pump_4_disorder_b) ? null : (
            // (props.sectorFeed.pump_open ||
            //   props.sectorFeed.low_pressure ||
            //   props.sectorFeed.water_level ||
            //   props.sectorFeed.pump_1_disorder ||
            //   props.sectorFeed.pump_2_disorder ||
            //   props.sectorFeed.pump_3_disorder ||
            //   props.sectorFeed.pump_4_disorder) ? (
            <View style={styles.warningBG}>
              {props.sectorFeed && props.sectorFeed.pump_open ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    문열림
                  </Text>
                </View>
              ) : null}

              {props.sectorFeed && props.sectorFeed.low_pressure ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    저압
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed && props.sectorFeed.pump_1_low_water ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    1번 펌프
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    수위 이상
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed && props.sectorFeed.pump_2_low_water ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    2번 펌프
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    수위 이상
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed && props.sectorFeed.pump_3_low_water ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    3번 펌프
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    수위 이상
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed && props.sectorFeed.pump_4_low_water ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />

                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    4번 펌프
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    수위 이상
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_1_disorder_a != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    1번 펌프 고장 A:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_1_disorder_a}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_1_disorder_b != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    1번 펌프 고장 B:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_1_disorder_b}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_2_disorder_a != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    2번 펌프 고장 A:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_2_disorder_a}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_2_disorder_b != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    2번 펌프 고장 B:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_2_disorder_b}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_3_disorder_a != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    3번 펌프 고장 A:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_3_disorder_a}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_3_disorder_b != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    3번 펌프 고장 B:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_3_disorder_b}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_4_disorder_a != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    4번 펌프 고장 A:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_4_disorder_a}
                  </Text>
                </View>
              ) : null}
              {props.sectorFeed &&
              props.sectorFeed.pump_4_disorder_b != "0000" ? (
                <View style={styles.warning}>
                  <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: "#f7727f"
                    }}
                  />
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500",
                      marginRight: 10
                    }}
                  >
                    4번 펌프 고장 B:
                  </Text>
                  <Text
                    style={{
                      color: "#f7727f",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >
                    {props.sectorFeed.pump_4_disorder_b}
                  </Text>
                </View>
              ) : null}
            </View>
          )}
        </View>

        {/* {props.pump && props.pump.map(pump => <Pump {...pump} key={pump.id} />)} */}
      </View>
      {/* </Grid> */}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  },
  header: {
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  name: {
    backgroundColor: "#fff",
    borderColor: "#7fd8e2",
    borderWidth: 3,
    width: width * 0.62,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent: "flex-start",

    marginTop: 20,
    marginLeft: width * 0.1,
    position: "relative"
  },
  nameText: {
    fontSize: 15,
    fontWeight: "300",
    color: "#467d94",
    marginLeft: 15,
    position: "relative",
    alignItems: "center"
  },

  nameText1: {
    fontSize: 20,
    fontWeight: "400",
    color: "#467d94",
    marginLeft: 20,
    alignItems: "center",
    marginTop: width * 0.015
  },

  buttonGray: {
    backgroundColor: "gray",
    width: width * 0.4,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    margin: 5
  },
  buttonBlue: {
    backgroundColor: "#30b4d8",
    width: width * 0.4,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    margin: 5
  },
  buttonRed: {
    backgroundColor: "#fff",
    width: width * 0.4,
    height: width * 0.13,
    borderRadius: width * 0.03,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    margin: 5,
    flexDirection: "row"
  },

  buttonText1: {
    color: "#757575",
    fontSize: 15,
    fontWeight: "500"
  },

  buttonTextRed: {
    color: "#f7727f",
    fontSize: 15,
    fontWeight: "500"
  },

  buttonTextBlue: {
    color: "#30b4d8",
    fontSize: 15,
    fontWeight: "500"
  },

  buttonGrey: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    margin: 10
  },
  buttonText1: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    margin: 10
  },

  pressure: {
    backgroundColor: "#fff",
    width: width * 0.4,
    height: width * 0.2,
    borderRadius: width * 0.03,
    padding: 10,
    margin: 7,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  pressureUnder: {
    backgroundColor: "#fff",
    width: width * 0.4,
    height: width * 0.2,
    borderRadius: width * 0.03,
    padding: 15,
    margin: 7,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  warningBG: {
    backgroundColor: "#fff",
    width: width * 0.9,
    borderRadius: width * 0.03,
    padding: 10,
    margin: 10,
    elevation: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10
  },
  pressureFont: {
    fontSize: 14,
    color: "#4593bc",
    marginLeft: 5
  },

  pressureFontBig: {
    fontSize: 17,
    color: "#4593bc",
    marginBottom: 14
  },

  input: {
    //width: width * 0.15,
    //marginRight: width * 0.02,
    height: 38,
    width: 70,
    textAlign: "center",
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    backgroundColor: "white"
  },

  warning: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: width * 0.4,
    marginBottom: 10,
    marginLeft: -width * 0.3
  },
  modalBG: {
    backgroundColor: "rgba(0,0,0,0.7)",
    height: height,
    width: width
  },
  map_view: {
    marginTop: 15,
    marginLeft: width * 0.1,
    height: height * 0.4,
    width: width * 0.8,
    alignItems: "center"
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  }
});

// PumpScreen.propTypes = {
//   pump: PropTypes.array.isRequired
// };

export default PumpScreen;
