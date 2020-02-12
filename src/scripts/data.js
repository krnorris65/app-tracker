const baseUrl = "http://localhost:8088"

const api = {
    getIdeas: () => {
        return fetch(`${baseUrl}/ideas`)
            .then(resp =>  resp.json())
    }
}

export default api;
