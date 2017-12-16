import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Post extends React.Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    const { imageUrl } = this.props;
    if (imageUrl) {
      Image.getSize(imageUrl, (width, height) => {
        const imageHeight = 200;
        const scaleFactor = height / imageHeight;
        const imageWidth = width / scaleFactor;
        this.setState({ width: imageWidth, height: imageHeight });
      });
    }
  }

  render() {
    const { width, height } = this.state;
    const { imageUrl } = this.props;
    const image = imageUrl ? (
      <Image
        style={styles.imageContainer}
        source={{ uri: imageUrl }}
        style={{ width, height }}
        resizeMode="contain"
      />
    ) : (
      <View>
        <Text>No Image</Text>
      </View>
    );
    return (
      <View>
        <View style={styles.imageContainer}>{image}</View>
        <Text style={styles.title}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  title: {
    padding: 22,
    color: "grey",
    fontWeight: "300",
    fontSize: 16
  }
});
