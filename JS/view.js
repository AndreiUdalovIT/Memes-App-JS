class View {
    constructor({ searchIdImage }) {
        this.inputMemesNode = document.getElementById('mem-input');
        this.inputTextTopNode = document.getElementById('input-text-top');
        this.inputTextBottomNode = document.getElementById('input-text-bottom');
        this.textTopImgNode = document.getElementById('text-top-img');
        this.textBottomImgNode = document.getElementById('text-bottom-img');
        this.imgNode = document.getElementById('image');
        this.errorNode = document.getElementById('error');

        this.inputMemesNode.addEventListener('change', this.clickOnMemes);
        this.inputTextTopNode.addEventListener('input', this.renderTextTop);
        this.inputTextBottomNode.addEventListener('input', this.renderTextBottom);
        
        this.searchIdImage = searchIdImage;
    }

    renderMemesInput = (memes) => {
        let memInputHTML = '';
        
        memes.forEach(element => {
            memInputHTML += `<option value="${element.id}">${element.name}</option>`
        });
        
        this.inputMemesNode.innerHTML = memInputHTML
    }

    renderImg = (urlImg) => {
        this.imgNode.src = urlImg;
    }

    clickOnMemes = (event) => {
        const id = event.target.value;
        this.searchIdImage(id);
    }

    renderTextTop = () => {
        if (this.inputTextTopNode.value.length > 23) {
            this.errorNode.innerText = 'Ошибка, текст больше 23 символов'
            return;
        }
        this.errorNode.innerText = ''
        this.textTopImgNode.innerText = this.inputTextTopNode.value;
    }

    renderTextBottom = () => {
        if (this.inputTextBottomNode.value.length > 23) {
            this.errorNode.innerText = 'Ошибка, текст больше 23 символов'
            return;
        }
        this.errorNode.innerText = ''
        this.textBottomImgNode.innerText = this.inputTextBottomNode.value;
    }
}
