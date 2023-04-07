import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
} from '../../components/Components';
import Axios from 'axios';
import {API_HOST} from '../../config/config';
import {getData} from '../../utils/utils';

const OrderDetail = ({route, navigation}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {status: 'Batal'};
    getData('token').then(resToken => {
      Axios.post(`${API_HOST.url}transaction/${order.id}`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
        .then(res => {
          console.log('Success cancel order: ', res);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch(err => {
          console.log('err: ', err);
        });
    });
  };
  return (
    <View>
      <View>
        <Header
          title="Payment"
          subTitle="You Deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            type="order-summary"
            name={order.food.name}
            price={order.food.price}
            image={{uri: order.food.picturePath}}
            items={order.quantity}
          />
          <Text style={styles.details}>Details Transaction</Text>
          <ItemValue
            label={order.food.name}
            value={order.food.price * order.quantity}
            type="currency"
          />
          <ItemValue label="Driver" value={5000} type="currency" />
          <ItemValue label="Tax 10% " value={0} />
          <ItemValue
            label="Total Price"
            value={order.food.price * order.quantity}
            valueColor="#1ABC9C"
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemValue label="Name" value={order.user.name} />
          <ItemValue label="Phone No." value={order.user.phonenumber} />
          <ItemValue label="Address" value={order.user.address} />
          <ItemValue label="House No." value={order.user.housenumber} />
          <ItemValue label="City" value={order.user.city} />
          <ItemValue label="Note" value="Pager Ijo" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemValue
            label={`#${order.id}`}
            value={order.status}
            valueColor={order.status === 'Batal' ? '#D9435E' : '1ABC9C'}
          />
          <ItemValue label="Date" value={order.create_at} />
        </View>
        <View style={styles.button}>
          {order.status === 'Menunggu_Konfirmasi' && (
            <Button
              text="Cancel Order"
              onPress={onCancel}
              color="#D9435E"
              textColor="white"
            />
          )}
        </View>
        <View style={{height: 30}} />
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  details: {
    color: '#000000',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
