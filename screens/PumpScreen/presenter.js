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
  TextInput,
  Alert
} from "react-native";
import Pump from "../../components/Pump";
import Grid from "react-native-grid-component";
import { Icon } from "native-base";

const { width, height } = Dimensions.get("window");


// _renderItem = (data, i) => (
//   <View style={[{ backgroundColor: data }, styles.item]} key={i} />
// );

// _renderPlaceholder = i => <View style={styles.item} key={i} />;

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
    <View style={{flexDirection:'column'}}>
    <View style={styles.name}>
      <View style={{position:"absolute",top:5,left:5}}>
      <Text style={styles.nameText}>현장명</Text>
      </View>
    </View>

    <View style={styles.name}>
      
      <Text style={styles.nameText1}>모뎀번호</Text>
      
    </View>

    </View>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
    <View style={styles.buttonRed}>
      <Text style={styles.buttonText}>접속 종료 상태</Text>
    </View>

    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>접속 요청</Text>
    </TouchableOpacity>
    </View>

    {/* <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>펌프 설정</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonBlue}>
      <Text style={styles.buttonText}>암호 변경</Text>
    </TouchableOpacity>
    </View> */}


    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>흡입압력</Text>
        <TextInput style={styles.input} value={"200"} />
        <Text style={styles.pressureFont}>Bar</Text>
      </View>
    </View>

    <View style={{flexDirection:'row', marginTop:20,justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>유량</Text>
        <TextInput style={styles.input} value={"340"} />
        <Text style={styles.pressureFont}>m^3/s</Text>
      </View>
    </View>

    </View>


    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>토출압력</Text>
        <TextInput style={styles.input} value={"200"} />
        <Text style={styles.pressureFont}>Bar</Text>
      </View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <View style={styles.pressure}>
        <Text style={styles.pressureFont}>설정압력</Text>
        <TextInput style={styles.input} value={"340"} />
        <Text style={styles.pressureFont}>Bar</Text>
      </View>
    </View>

    </View>
    
      <View style={{width:width,justifyContent:'center',alignItems:'center',flexDirection:'column',}}>

      <TouchableOpacity>
        <Image source={require('../../assets/images/pump_02.gif')}
          style={{resizeMode:'contain', width: width * 0.8,marginBottom:-20}}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/pump_01.gif')}
          style={{resizeMode:'contain', width: width * 0.8,}}
        />
      </TouchableOpacity>


      <View style={styles.warningBG}>

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
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500',marginRight:10}}>1번 펌프</Text>
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500'}}>문열림</Text>
      </View>

      

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
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500',marginRight:10}}>2번 펌프</Text>
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500'}}>저압</Text>
      </View>

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
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500',marginRight:10}}>2번 펌프</Text>
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500'}}>고장</Text>
      </View>

     

   

      
      
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
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500',marginRight:10}}>2번 펌프</Text>
        <Text style={{color:"#f7727f",fontSize: 20, fontWeight:'500'}}>수위이상</Text>
      </View>
      </View>


      </View>
      

      {/* {props.pump && props.pump.map(pump => <Pump {...pump} key={pump.id} />)} */}

 

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
    position:'relative',
    alignItems:'center'
  },

  nameText1:{
    fontSize:20,
    fontWeight:'400',
    color:'#467d94',
    marginLeft: 20,
    alignItems:'center',
    marginTop: width * 0.015
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

  warningBG: {
    backgroundColor:'#fff',
    width: width * 0.9,
    borderRadius: width * 0.03,
    padding:10,
    margin:10,
    elevation:2,
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:10
    
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

  warning: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width: width * 0.4,
    marginBottom: 10,
    marginLeft: - width * 0.3
  }
});

PumpScreen.propTypes = {
  pump: PropTypes.array.isRequired
};

export default PumpScreen;
