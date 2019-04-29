import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Town from "../../components/Town";

const FeedScreen = props => (
  <View style={{ flexDirection: "row" }}>
  <ScrollView
    horizontal={false}
    style={{ flexDirection: "row" }}
    contentContainerStyle={[styles.djWJrn]}
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >


    <View>
      {props.feed &&
        props.feed.town_set.map(town => <Town {...town} key={town.id} />)}
    </View>
  </ScrollView>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    display: "flex",
    flexDirection: "row"
  },

  djWJrn: {
    flexWrap: "wrap",
    flexDirection: "row"
  }
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired
};

export default FeedScreen;
