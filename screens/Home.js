import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import HorizontalImageCard from "../components/HorizontalImageCard";
import RBSheet from "react-native-raw-bottom-sheet";
import Modal from "react-native-modal";

function Home() {

  const listEnLive = [
    {
      id: 0,
      img: require("../images/image1.jpg"),
      titleLive: "MASTER OF SOUND",
    },
    {
      id: 1,
      img: require("../images/image2.jpg"),
      titleLive: "MATHIEU LAMBOLEY ET AMBROISINE BRE",
    },
    {
      id: 2,
      img: require("../images/image3.jpg"),
      titleLive: "CHARLOTTE CARDIN ET ALIOCHA",
    },
    {
      id: 3,
      img: require("../images/image4.jpg"),
      titleLive: "MASTER OF SOUND",
    },
  ];

  const listBientotlive = [
    {
      id: 0,
      img: require("../images/image5.jpg"),
      title: "Miguel martinez",
      description: "Mercredi 24/07/1996 a 00:00",
    },
    {
      id: 1,
      img: require("../images/image6.jpg"),
      title: "Chrisian hog",
      description: "Jeudi 26/03/1996 a 23:00",
    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Filip leonci",
      description: "Dimanche 12/02/1996 a 20:00",
    },
    {
      id: 3,
      img: require("../images/image8.jpg"),
      title: "Wiili martinez",
      description: "Lundi 01/07/1998 a 00:00",
    },
  ];

  const listProchainelive = [
    {
      id: 0,
      img: require("../images/image9.jpg"),
      title: "Mike jackson",
    },
    {
      id: 1,
      img: require("../images/image4.jpg"),
      title: "Kiven derik",
    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Chris perces",
    },
    {
      id: 3,
      img: require("../images/image9.jpg"),
      title: "Jandriic nic",
    },
  ];

  const listUniversMusical = [
    {
      id: 0,
      img: require("../images/image2.jpg"),
      title: "Roben blond",
    },
    {
      id: 1,
      img: require("../images/image6.jpg"),
      title: "Victor perez",
    },
    {
      id: 2,
      img: require("../images/image8.jpg"),
      title: "Alpha blondi",
    },
    {
      id: 3,
      img: require("../images/image9.jpg"),
      title: "Mario gomez",
    },
  ];

  const listUniversPhoto = [
    {
      id: 0,
      img: require("../images/image1.jpg"),
      title: "Joeken jemin",
    },
    {
      id: 1,
      img: require("../images/image8.jpg"),
      title: "Lea loe",
    },
    {
      id: 2,
      img: require("../images/image7.jpg"),
      title: "Victoria smith",
    },
    {
      id: 3,
      img: require("../images/image6.jpg"),
      title: "Rosa blond",
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={["#21224A", "#21224A", "#21224A", "#321036", "#321036"]}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal
          isVisible={isModalVisible}
          style={styles.modalContainer}
          animationIn={"slideInUp"}
          animationOut={"slideOutDown"}>
          <View
            style={styles.modalView}>
            <LinearGradient
              colors={["#21224A", "#21224A", "#21224A", "#21224A", "#321036"]}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height:'100%',
                borderTopRightRadius:20,
                borderTopLeftRadius:20,
                position:"relative"
              }}>
              <ImageBackground
                source={require('../images/image9.jpg')}
                imageStyle={{borderTopLeftRadius:20,borderTopRightRadius:20,}}
                style={{height:200,marginBottom:20}}
              >

              </ImageBackground>
              <View style={{display:"flex",flexDirection:"row",marginLeft:30,alignItems:"center",marginBottom:20}}>
                <Image style={{marginRight:20}} source={require('../images/heart.svg')}/>
                <Text style={{color:"#ffffff",fontSize:18,fontWeight:"bold"}}>Informations</Text>
              </View>
              <Text style={{paddingLeft:30,color:"#ffffff",fontWeight:"bold",fontSize:16,lineHeight: 30,paddingRight:20}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. the printing and typesetting industry.
              </Text>

              <Text style={{paddingLeft:30,color:"#ffffff",fontWeight:"bold",fontSize:16,marginTop:30}}>
                Vendredi 20 Avril 2022
              </Text>
              <TouchableOpacity
                style={{position:"absolute",top:0,right:0,padding:20}}
                key={"568"}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Image source={require("../images/closebs.svg")} />
              </TouchableOpacity>
            </LinearGradient>

          </View>
        </Modal>
        <View
          style={styles.titleLive}>
          <Text style={styles.textLive}>En live</Text>
          <View
            style={styles.dotLive}>
          </View>
        </View>
        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width,
            height: 200,
            cardhighlight: true,
            cardhighlightText: "live",
          }}
          informations={listEnLive}
          screen={"livedetail"}
        />
        <Text style={styles.textBL}>Bientot En live</Text>
        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width,
            height: 200,
          }}
          informations={listBientotlive}
          screen={"detailbl"}
        />
        <Text style={styles.textBL}>Prochaine lives</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
            modal: true,
            setVisibility: setModalVisible,
          }}
          informations={listProchainelive}
          screen={"signup"}
        />

        <Text style={styles.textBL}>Univers musical</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
          }}
          informations={listUniversMusical}
          screen={"signup"}
        />

        <Text style={styles.textBL}>Univers musical</Text>

        <HorizontalImageCard
          props={{
            width: Dimensions.get("window").width * 0.5,
            height: 200,
          }}
          informations={listUniversPhoto}
          screen={"signup"}
        />
      </ScrollView>
    </LinearGradient>);
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "flex-start",
  },
  titleLive: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
  },
  dotLive: {
    width: 3,
    height: 3,
    backgroundColor: "red",
    marginLeft: 15,
    marginBottom: 30,
  },
  textLive: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  textBL: {
    color: "#9DA5AD",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 12,
    marginLeft: 10,
  },
  modalContainer: {
    position: "relative",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    marginLeft: 0,
    marginBottom: 0,
  },
  modalView: {
    width: Dimensions.get("window").width,
    height:Dimensions.get("window").height*0.6,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});