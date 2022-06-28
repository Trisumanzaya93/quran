import {Alert,Image, View, Text, ScrollView, TouchableOpacity, Pressable, Modal,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSuratAction } from '../../redux/actions/surat'
import Sound from 'react-native-sound';
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [isLoading,setIsLoading]=useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [isPlay, setIsPlay] = useState(true)
    const [detailModal, setDetailModal] = useState({})
    const surat = useSelector((state)=>state.getAllSurat.surat)
    console.log(surat);

    const Audio = new Sound(
      detailModal.audio??"",
      null,
      error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // if loaded successfully
        console.log(
          'duration in seconds: ' +
            Audio.getDuration() +
            'number of channels: ' +
            Audio.getNumberOfChannels(),
        );
      },
      )

    const handlePlay = ()=>{
      if(isPlay===false){
        Audio.pause()
      }else{
        Audio.play()
      }
    }
    const handleStop =()=>{
      Audio.stop()
    }
    const handlePause = () =>{
      Audio.pause((response)=>{
        if(response){
          console.log(response);
        }
      })
    }
    const handleNavigate = ()=>{
      navigation.navigate('DetailSurat', {id: detailModal.nomor})
      setModalVisible(!modalVisible)
    }

    const handleDetail =(item)=>{
      setModalVisible(true)
      setDetailModal(item)
    }
    const getSurat = () => {
        setIsLoading(true)
        dispatch(getAllSuratAction())
          .then(result => {
            const data = result;
            console.log(data);
            // setdetailhistory(data);
            // setPopular(data);
            setIsLoading(false)
            // console.log('parameter',data);
          })
          .catch(err => console.log(err));
      };
    useEffect(() => {
        getSurat()
    }, [])
    
  return (
    <>
    <View style={{backgroundColor:"#fff"}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {surat.length > 0 &&
            surat.map((item, idx) => {
            return(
                <View key={idx} style={{marginTop:"5%"}}>
                <TouchableOpacity onPress={()=>handleDetail(item)} style={{marginLeft:"10%",height:50,width: '80%', backgroundColor:"#D3D3D3",borderRadius:10, alignItems: 'center',justifyContent:"center", marginTop: 10}}>
                    <Text style={{fontSize:20}}>{item.nama_latin}</Text>
                </TouchableOpacity>   
                                 
                </View>
            )
        })}
        </ScrollView>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{alignItems:"center"}}>
          <Text style={{alignItems:"center",marginBottom:30}} >{detailModal.nama_latin}</Text>
          </View>
            <ScrollView showsVerticalScrollIndicator={false}>
          
            <View style={{marginBottom:10}}>
            <Text style={styles.modalText}>Surat : {detailModal.nama}</Text>
            <Text style={styles.modalText}>Nomor Surat : {detailModal.nomor}</Text>
            <Text style={styles.modalText}>Arti : {detailModal.arti}</Text>
            <Text style={styles.modalText}>Jumlah Ayat : {detailModal.jumlah_ayat}</Text>
            <Text style={styles.modalText}>{detailModal.deskripsi}</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginHorizontal:30}}>
            <TouchableOpacity onPress={handlePlay}>
              <Image style={{width:25,height:25}} source={icon1}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePause}>
            <Image style={{width:25,height:25}} source={icon3}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStop}>
            <Image style={{width:25,height:25}} source={icon2}/>
            </TouchableOpacity>
            </View>

            </View>
            </ScrollView>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleNavigate}
            >
              <Text style={styles.textStyle}>Detail</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width:'80%',
    height:"85%",
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    
  }
});

export default Home