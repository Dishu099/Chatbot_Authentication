import axios from 'axios'

const searchData = async (term) => {

    const { data } = await axios.get(
        'https://www.googleapis.com/customsearch/v1',
        {
            params: {
                key: 'AIzaSyDsspDuVwNTIiCXI4Bmbuvhq6gcaKR_l9A',
                cx: 'a07c7d2c7bdc54d19',
                q: term,
            },
        }
    );

    return data;

}

export default searchData