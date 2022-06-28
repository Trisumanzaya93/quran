import {View, Text, ScrollView,ActivityIndicator,TouchableOpacity,FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailSuratAction} from '../../redux/actions/surat';

const DetailSurat = ({route}) => {
  const nomor = route.params.id;
  const dispatch = useDispatch();
  const ayat = useSelector(state => state.getDetailSurat.ayat.ayat);
  const judul = useSelector(state => state.getDetailSurat.ayat);
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState([0 , 4]);
  const [colorV, setColorV] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  console.log(color[colorV]);
 
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //   <Text style={[styles.title, textColor]}>{item.title}</Text>
    // </TouchableOpacity>
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text
      style={{
        fontSize: 19,
        textAlign: 'right',
        marginTop: 10,
      }}>
      {item.ar}
    </Text>
    <Text style={{fontSize: 17, marginTop: 10}}>
      {item.idn}
    </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#D3D3D3";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const getAyat = () => {
    setIsLoading(true);
    dispatch(getDetailSuratAction(nomor));
    setIsLoading(false);
  };

  useEffect(() => {
    getAyat();
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#D3D3D3',
          paddingHorizontal: 10,
          width: '90%',
          marginHorizontal: '5%',
          marginVertical: '5%',
          borderRadius: 10,
        }}>
          {isLoading ? (
            <>
            <View style={{width:"50%",display:'flex',justifyContent:"center",alignItems:"center"}} >
              <ActivityIndicator
                style={{marginTop: 40}}
                size="large"
                color="#000"
              />
            </View>
            </>
          ) : (
            <>
            <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1}} >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginVertical: 15,
                }}>
                {judul.nama_latin}
              </Text>
              <View style={{width:'100%',height:"auto"}}>
              <FlatList
        data={ayat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
              </View>
              {/* {ayat.length > 0 &&
                ayat.map((item, idx) => {
                  return (
                    <View key={idx} >
                      <TouchableOpacity >
                      <Text
                        style={{
                          fontSize: 19,
                          textAlign: 'right',
                          marginTop: 10,
                        }}>
                        {item.ar}
                      </Text>
                      <Text style={{fontSize: 17, marginTop: 10}}>
                        {item.idn}
                      </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })} */}
        </ScrollView>
            </>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    borderRadius:10
  },
  title: {
    fontSize: 32,
  },
});

export default DetailSurat;
