import Axios from 'axios';
import {API_HOST} from '../../config/config';
import {getData, showMessage} from '../../utils/utils';

export const getOrders = () => dispatch => {
  getData('token').then(resToken => {
    Axios.get(`${API_HOST.url}transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then(res => {
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        showMessage(
          `${err?.response?.data?.message} on Transaction API` ||
            'Terjadi Kesalahan di API Transaction',
        );
      });
  });
};

// 16258054093

// 70012
// 397518022369

export const getInProgress = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}transaction?status=Menunggu_Konfirmasi`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}transaction?status=Sedang_Diproses`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}transaction?status=Dalam_Pengiriman`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const menungguKonfirmasi = res1.data.data.data;
          const sedangDiproses = res2.data.data.data;
          const sedangDikirim = res3.data.data.data;

          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...menungguKonfirmasi, ...sedangDikirim, ...sedangDiproses],
          });
        }),
      )
      .catch(err => {
        showMessage(
          `${err?.response?.data?.message} on In Progress API` ||
            'Terjadi Kesalahan di In Progress API',
        );
      });
  });
};

export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    Axios.all([
      Axios.get(`${API_HOST.url}transaction?status=Batal`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.url}transaction?status=Selesai`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2) => {
          const batal = res1.data.data.data;
          const selesai = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...batal, ...selesai],
          });
        }),
      )
      .catch(err => {
        showMessage(
          `${err?.response?.data?.message} on Past Order API` ||
            'Terjadi Kesalahan di API Past Order',
        );
      });
  });
};
