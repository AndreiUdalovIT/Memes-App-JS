class Controller {
    constructor() {
        this.model = new Model({
            changeMemes: this.handleChangeMemes,
            changeImg: this.handleChangeImg
        });
        this.api = new API();
        this.view = new View({
            searchIdImage: this.handleSearchIdImage
        });
    }

    init = () => {
        this.api.fetchMemes()
            .then(response => {
                this.model.addMemes(response);
                this.model.getFirstMem();
            })    
    }

    handleChangeMemes = (memes) => {
        this.view.renderMemesInput(memes);
    }

    handleChangeImg = (urlImg) => {
        this.view.renderImg(urlImg);
    }

    handleSearchIdImage = (id) => {
        this.model.getImgUrl(id);
    }
}
