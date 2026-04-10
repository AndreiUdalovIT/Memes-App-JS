class Model {
    constructor({ changeMemes, changeImg }) {
        this.memes = null;

        this.changeMemes = changeMemes;
        this.changeImg = changeImg;
    }

    addMemes = (response) => {
        if (response.success) {
            this.memes = response.data.memes;
            this.changeMemes(this.memes);
        }
    }

    getFirstMem = () => {
        const urlImgFirst = this.memes[0].url;
        this.changeImg(urlImgFirst);
    }

    getImgUrl = (id) => {
        let urlImg = '';
        this.memes.forEach(element => {
            if (element.id === id) {
                urlImg = element.url;
            }
        });
        this.changeImg(urlImg);
    }
}
