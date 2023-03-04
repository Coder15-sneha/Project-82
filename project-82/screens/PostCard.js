import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.posts.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}> {this.props.posts.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
              <Text style={styles.likeText}>2M</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(5),
    backgroundColor: '#9EBDDB',
    borderRadius: RFValue(20),
  },
  profileImage: {
    resizeMode: 'contain',
    width: RFValue(50),
    alignSelf: 'right',
    height: RFValue(50),
  },
  postImage :{
    resizeMode:"fill",
    width: RFValue(450) ,
    height: RFValue(200),   
  },
  authorNameContainer: {
    paddingLeft: RFValue(10),
    justifyContent: 'center',
  },
  authorNameText: {
    fontSize: RFValue(25),
    color: 'white',
  },
  captionContainer: {
    fontSize: RFValue(20),
    color: 'white',
  },
  captionText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
