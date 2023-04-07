import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action/home';
import {HomeTabSection} from '../../components/Components';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  const [refreshing, setRefreshing] = useState(benar => !benar);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getFoodData());
    setRefreshing(false);
  };
  const [changeText, setChangeText] = useState(true);
  const [modalVisiblePopUp, setModalVisiblePopUp] = useState(false);

  const handleOpenModalPopUp = () => {
    setModalVisiblePopUp(true) == setChangeText(changeText);
  };

  const handleCloseModalPopUp = () => {
    setModalVisiblePopUp(false) == setChangeText(!changeText);
  };
  return (
    <View style={styles.page}>
      <View style={styles.tabContainer}>
        {/* <View style={styles.containerButtonOpenPopUp}>
          {changeText ? (
            <TouchableOpacity onPress={handleOpenModalPopUp}>
              <Text style={styles.buttonPopUp}>Buka Pop Up</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleCloseModalPopUp}>
              <Text style={styles.buttonPopUp}>Tutup Pop Up</Text>
            </TouchableOpacity>
          )}
        </View>

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisiblePopUp}>
          <View style={styles.modalContainerPopUp}>
            <View style={styles.modalContentPopUp}>
              <TouchableOpacity onPress={handleCloseModalPopUp}>
                <Text style={styles.closeButtonPopUp}>Tutup Pop Up</Text>
                <Text style={styles.closeButtonPopUp}>Tutup Pop Up</Text>
                <Text style={styles.closeButtonPopUp}>Tutup Pop Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
  buttonPopUp: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonModalPopUp: {
    backgroundColor: 'yellow',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  containerButtonClosePopUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  containerButtonOpenPopUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  modalContainerPopUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    bottom: 73,
  },
  modalContentPopUp: {
    backgroundColor: 'green',
    borderRadius: 5,
    bottom: 70,
  },
  closeButtonPopUp: {
    color: 'blue',
    textAlign: 'center',
    padding: 10,
    top: 5,
  },
});
