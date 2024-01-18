import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '120772ad19914bf492f0f6c1a238afb1'
    }
})