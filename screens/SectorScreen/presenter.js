import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Sector from "../../components/Sector";

const SectorScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <View styles={styles.container}>
      {props.sector &&
        props.sector.map(sector => <Sector {...sector} key={sector.id} />)}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  }
});

SectorScreen.propTypes = {
  sector: PropTypes.object.isRequired
};

export default SectorScreen;
