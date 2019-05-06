import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  
} from "react-native";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"dark-content"} />
    {/* <View style={styles.header}>
      <Text style={styles.logo}>WATER PUMP</Text>
    </View> */}
    <View style={styles.content}>

    <View>
      <Image source={require('../../assets/images/loginLogo.png')}
        style={{resizeMode:'contain',height:width*0.7,marginLeft:width*0.13,
        }}
      />
      </View>

      <TextInput
        placeholder="ID"
        style={styles.textInput}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={props.username}
        onChangeText={props.changeUsername}
      
        
      />
      <TextInput
        placeholder="PASSWORD"
        style={styles.textInput}
        autoCapitalize={"none"}
        secureTextEntry={true}
        autoCorrect={false}
        value={props.password}
        onChangeText={props.changePassword}
        returnKeyType={"send"}
        onSubmitEditing={props.submit}
        
      />
      <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
        <View style={styles.button}>
          {props.isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>LOGIN</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

LogInScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: "#e4ecef",
    alignItems: "center",
    justifyContent: "center",
    width
  },
  logo: { width: 200, height: 30, marginTop: 0, color: "white", fontSize: 23 },
  content: {
    flex: 7,
    backgroundColor: "white",
    paddingTop: 45,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textInput: {
    height: 50,
    backgroundColor:'rgba(0,0,0,0)',
    borderColor:'rgba(0,0,0,0)',
    borderWidth:StyleSheet.hairlineWidth,
    borderColor: "#00a5dd",
    width: width - 80,
    // borderBottomWidth:2,
    marginBottom: width*0.1,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 10,
    color:'#898989'
  },
  touchable: {
    borderRadius: 3,
    backgroundColor: "#00a5dd",
    width: width - 80,
    marginTop: 20
  },
  button: {
    paddingHorizontal: 7,
    height: 50,
    justifyContent: "center"
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 15
  },
  character: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00a5dd',
    width:width*0.4,
    height:width*0.4,
    borderRadius:width*0.3,
    marginBottom:width*0.2,
  }
});
export default LogInScreen;