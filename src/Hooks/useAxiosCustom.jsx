import axios from "axios";

const axiosCustom = axios.create({
    baseURL: 'https://job-atlas-server.vercel.app',
})

const useAxiosCustom = () => {
    return axiosCustom;
}

export default useAxiosCustom;