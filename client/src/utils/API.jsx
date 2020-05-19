import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyDPPlksvP-2NWQbSrsruAJb7UexJoMPNBA";

export default {

    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
    // search: function(queryT, queryA) {
    //     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${queryT}+inauthor:${queryA}&key=${APIKEY}`
    // }
};