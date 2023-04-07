import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Number, Rating} from '../Molecules';

const ItemListFood = ({
  type,
  image,
  onPress,
  items,
  rating,
  price,
  name,
  date,
  status,
}) => {
  const [showImage, setShowImage] = useState(false);
  const handleClick = () => {
    setShowImage(true);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.productContainer}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.containerCounter}>
                  {!showImage ? (
                    <TouchableOpacity activeOpacity={0.7} onPress={handleClick}>
                      <View style={styles.button}>
                        <Text style={styles.textButton}>Tambah</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity activeOpacity={0.7} onPress={handleClick}>
                      <View style={styles.button}>
                        <Text style={styles.textButton}>1 item</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {status === 'Tersedia' ? (
                <Number number={price} style={styles.price} />
              ) : (
                <Text style={styles.habis}>Persediaan Habis</Text>
              )}
              {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}>
                <TouchableOpacity
                  onPress={handleCloseModal}
                  style={styles.closeButtonModal}
                />
                <View style={styles.modalContainerModal}>
                  <Image
                    style={styles.imageModal}
                    source={require('../image/ayambakar.jpg')}
                  />
                  <View style={styles.containerTitleModal}>
                    <Text style={styles.descriptionTitleModal}>Ayam Bakar</Text>
                  </View>
                  <View style={styles.containerDescriptionModal}>
                    <Text style={styles.textDescriptionModal}>
                      Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim,
                      terutama hidangan Indonesia atau Malaysia, dari ayam yang
                      dipanggang di atas arang.
                    </Text>
                  </View>
                  <View style={styles.containerPriceModal}>
                    <Text style={styles.priceModal}>15.000</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonModalModal}
                    activeOpacity={0.5}>
                    <Text style={styles.buttonTambahModal}>Tambah Pesanan</Text>
                  </TouchableOpacity>
                </View>
              </Modal> */}
              {/* </View> */}
            </View>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Text style={styles.items}>{items} items </Text>
          </>
        );
      case 'in-progress':
        // item in progress
        const formatedDataIn = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                  <Text style={styles.price}>{items} items</Text>
                  <View style={styles.dot} />
                  <Number number={price} style={styles.price} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.conta}>
              <Text style={styles.date}>{formatedDataIn}</Text>
              <Text style={styles.statusIn(status)}>{status}</Text>
            </View>
          </>
        );
      case 'past-orders':
        const formatedData = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                  <Text style={styles.price}>{items} items</Text>
                  <View style={styles.dot} />
                  <Number number={price} style={styles.price} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.conta}>
              <Text style={styles.date}>{formatedData}</Text>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <View>
      {status === 'Tersedia' ? (
        <TouchableOpacity activeOpacity={(0, 7)} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            {renderContent()}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          {renderContent()}
        </View>
      )}
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  containerPriceModal: {
    position: 'absolute',
    width: 90,
    height: 17,
    left: 18,
    top: 430,
  },
  priceModal: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 17,
    color: '#000000',
  },
  containerDescriptionModal: {
    position: 'absolute',
    width: 355,
    height: 84,
    left: 18,
    top: 360,
  },
  containerTitleModal: {
    position: 'absolute',
    width: 93,
    height: 19,
    left: 18,
    top: 335,
  },
  textDescriptionModal: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 15,
    color: '#000000',
  },
  textTitleModal: {
    fontWeight: 'normal',
    fontSize: 24,
  },
  descriptionModal: {
    marginStart: 23,
    backgroundColor: 'blue',
    marginEnd: 23,
  },
  descriptionTitleModal: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#7A4141',
  // },
  buttonModal: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonTambahModal: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonModalModal: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    maxWidth: 400,
    height: 43,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    textAlign: 'center',
  },
  modalContainerModal: {
    flex: 1,
    position: 'absolute',
    width: 428,
    height: 612,
    left: 0,
    top: 255,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  closeButtonModal: {
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingEnd: 500,
    paddingBottom: 300,
    paddingTop: 200,
  },

  imageModal: {
    position: 'absolute',
    width: 363,
    height: 277,
    left: 15,
    end: 15,
    top: 38,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  value: {
    fontSize: 16,
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 10,
  },
  minus: {
    height: 35,
    width: 35,
  },
  plus: {
    height: 35,
    width: 35,
  },
  containerCounter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 8,
    overflow: 'hidden',
    width: 60,
    height: 60,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '700',
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  habis: {
    color: 'red',
    fontWeight: '400',
  },
  status: status => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: status === 'Batal' ? '#D9435E' : '#1ABC9C',
  }),
  statusIn: status => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: status === 'Menunggu_Konfirmasi' ? '#D9435E' : '#1ABC9C',
  }),
  conta: {
    backgroundColor: 'white',
    // paddingVertical: 9,
    paddingTop: 3,
    alignItems: 'flex-end',
  },
  date: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  row: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  con: {
    left: 30,
  },
  button: {
    backgroundColor: '#7A4141',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  textButton: {
    color: '#FAFAFA',
  },
});
