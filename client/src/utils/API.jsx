import axios from "axios";

const APIKEY = "AIzaSyDPPlksvP-2NWQbSrsruAJb7UexJoMPNBA";

export default {

    search: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKEY}`);
    }
    // search: function(queryT, queryA) {
    //     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${queryT}+inauthor:${queryA}&key=${APIKEY}`
    // }
};