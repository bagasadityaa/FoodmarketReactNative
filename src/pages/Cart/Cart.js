import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Header} from '../../components/Components';

const Cart = ({navigation}) => {
  return (
    <View>
      <Header
        title="Keranjang"
        subTitle="Yuk Checkout Sekarang"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Produk</Text>
          <Text style={styles.tableCell}>Harga</Text>
          <Text style={styles.tableCell}>Jumlah</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Ayam Bakar</Text>
          <Text style={styles.tableCell}>Rp 100.000</Text>
          <TextInput style={[styles.tableCell, styles.tableInput]} value="1" />
          <Text style={styles.tableCell}>Rp 100.000</Text>
        </View>
      </View>
      <Button text="Checkout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  table: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#F2F2F2',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableImage: {
    width: 50,
    height: 50,
  },
  tableInput: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cart;
