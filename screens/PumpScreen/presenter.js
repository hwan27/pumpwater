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
  TextInput
} from "react-native";
import Pump from "../../components/Pump";
import Grid from "react-native-grid-component";

const { width, height } = Dimensions.get("window");

_renderItem = (data, i) => (
  <View style={[{ backgroundColor: data }, styles.item]} key={i} />
);

_renderPlaceholder = i => <View style={styles.item} key={i} />;

const PumpScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
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

    <View style={styles.name}>
      <View style={{position:"absolute",top:5,left:5}}>
      <Text style={styles.nameText}>현장명</Text>
      </View>
    </View>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.buttonRed}>
      <Text style={styles.buttonText}>접속 종료 상태</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>접속 요청</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>펌프 설정</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>암호 변경</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>토출압력</Text>
        <TextInput style={styles.input} value={"200"} />
        <Text style={styles.pressureFont}>Bar</Text>
      </View>
    </View>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>설정압력</Text>
        <TextInput style={styles.input} value={"340"} />
        <Text style={styles.pressureFont}>Bar</Text>
      </View>
    </View>

    </View>
    
      <View style={{width:width,justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
        <Image source={require('../../assets/images/pump_02.gif')}
          style={{resizeMode:'contain', width: width * 0.8,marginBottom:-20}}
        />
        <Image source={require('../../assets/images/pump_01.gif')}
          style={{resizeMode:'contain', width: width * 0.8,}}
        />
      </View>
      {props.pump && props.pump.map(pump => <Pump {...pump} key={pump.id} />)}
    </View>
    {/* </Grid> */}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  name: {
    backgroundColor: '#fff',
    borderColor: '#7fd8e2',
    borderWidth:3,
    width: width * 0.8,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent:'flex-start',
    
    marginTop:20,
    marginLeft: width * 0.1,
    position:'relative'
  },
  nameText: {
    fontSize:20,
    fontWeight:'400',
    color:'#467d94',
    marginLeft: 20,
  },
  buttonBlue: {
    backgroundColor:'#30b4d8',
    width: width * 0.4,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent:'center',
    alignItems:'center',
    elevation: 2,
    margin: 5
  },
  buttonRed: {
    backgroundColor:'#f7727f',
    width: width * 0.4,
    height: width * 0.13,
    borderRadius: width * 0.065,
    justifyContent:'center',
    alignItems:'center',
    elevation: 2,
    margin: 5
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'500'
  },
  pressure: {
    backgroundColor:'#fff',
    width: width * 0.4,
    height: width * 0.2,
    flexDirection:'row',
    borderRadius: width * 0.03,
    padding:10,
    margin:10,
    elevation:2,
    justifyContent:'center',
    alignItems:'center'
  },
  pressureFont: {
    fontSize: 14,
    color:'#4593bc'
  },
  input: {
    width: width * 0.1,
    margin: width * 0.02,
    height: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "#dbdbdb",
    borderWidth: 1,
    backgroundColor: "white"
  },
});

PumpScreen.propTypes = {
  pump: PropTypes.array.isRequired
};

export default PumpScreen;
