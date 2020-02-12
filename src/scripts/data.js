const baseUrl = "http://localhost:8088"

const api = {
    getIdeas: () => {
        return fetch(`${baseUrl}/ideas`)
            .then(resp =>  resp.json())
    },
    saveNewIdea: (newIdea) => {
        return fetch(`${baseUrl}/ideas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newIdea)
        }).then(resp => resp.json())
    }
}

export default api;