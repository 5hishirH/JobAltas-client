import axios from "axios";

const axiosCustom = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosCustom = () => {
    return axiosCustom;
}

export default useAxiosCustom;