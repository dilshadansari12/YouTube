// '97f0aba124mshadb14d4e0029e54p12a2c1jsn6576a3fe3023' new
// 'd4e39af54cmsh061f318ac256087p1b0cb0jsn9a2a407ef8cd', old



import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        '97f0aba124mshadb14d4e0029e54p12a2c1jsn6576a3fe3023',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


export  {fetchDataFromApi};

