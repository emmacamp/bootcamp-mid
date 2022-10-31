import axios from "axios";


export const createNotes = (param) => {
    return axios
        .post("https://jsonplaceholder.typicode.com/posts", param)
        .then((response) => {
            const { data } = response;
            return data;
        });
    // ...
}



export const getAllNotes = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            const { data } = response;
            return data;
        });
    // ...
}