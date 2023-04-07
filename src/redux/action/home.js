const {default: Axios} = require('axios');
const {API_HOST} = require('../../config/config');
import {showMessage} from '../../utils/utils';
export const getFoodData = () => dispatch => {
  Axios.get(`${API_HOST.url}food`)
    .then(res => {
      // console.log('res food: ', res.data.data.data);
      dispatch({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch(err => {
      console.log('err:', err);
    });
};
export const getFoodDatabyTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}food?types=${types}`)
    .then(res => {
      // console.log('res food: ', res.data.data.data);
      if (types === 'ayam') {
        dispatch({type: 'SET_AYAM', value: res.data.data.data});
      }
      if (types === 'bebek') {
        dispatch({type: 'SET_BEBEK', value: res.data.data.data});
      }
      if (types === 'ikan') {
        dispatch({type: 'SET_IKAN', value: res.data.data.data});
      }
      if (types === 'kuah') {
        dispatch({type: 'SET_KUAH', value: res.data.data.data});
      }
      if (types === 'tambahan') {
        dispatch({type: 'SET_TAMBAHAN', value: res.data.data.data});
      }
      if (types === 'tambahanSambel') {
        dispatch({type: 'SET_TAMBAHANSAMBEL', value: res.data.data.data});
      }
      if (types === 'minuman') {
        dispatch({type: 'SET_MINUMAN', value: res.data.data.data});
      }
      if (types === 'paketNasiBox') {
        dispatch({type: 'SET_PAKETNASIBOX', value: res.data.data.data});
      }
    })
    .catch(err => {
      showMessage(
        `${err?.response?.data?.message} on Food By Type API` ||
          'Terjadi kesalahan di API Food By Type',
      );
    });
};
