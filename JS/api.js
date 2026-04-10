class API {
    constructor() {
        this.baseURL = `https://api.imgflip.com/`;
        this.memesURl = `get_memes`;
    }

    fetchMemes = () => {
        return fetch(`${this.baseURL}${this.memesURl}`)
            .then(data => data.json())
    }
}
