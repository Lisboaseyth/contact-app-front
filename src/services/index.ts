import axios from "axios";

export const api = axios.create({
    baseURL: "https://contact-app-x6qr.onrender.com",
    timeout: 10000
})

// export const api = axios.create({
//     baseURL: "https://localhost:3000"
//   });