import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import Town from "../../components/Town";

const FeedScreen = props => (
  //<View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
  <ScrollView
    horizontal={false}
    contentContainerStyle={styles.contentContainer}
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={"black"}
      />
    }
  >
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {props.feed &&
        props.feed.town_set.map(town => (
          <Town
            {...town}
            key={town.id}
            town={town.title}
            refresh={props.refresh}
            isFetching={props.isFetching}
          />
        ))}
    </View>
  </ScrollView>
  //</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row"
  },

  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired
};

export default FeedScreen;
