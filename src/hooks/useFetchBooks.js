import axios from 'axios'
import Constants  from 'expo-constants'

const useFetchBooks = async (query) => {

    const API_KEY = Constants.manifest?.extra?.googleApiKey;
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

    return axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}`)
        .then(response => {
            console.log(response.data)
            return response.data            
        })
        .catch(error => {
        // Handle any errors here
            console.log(error)
            return null
    });

}
export default useFetchBooks