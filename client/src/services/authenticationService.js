import api from "./api";

export default {
    register (crendentials) {
        return api().post('register', crendentials)
    }
}