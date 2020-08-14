(function main() {

    const elementos = [
        { tag: 'p', texto: 'Frase 1', },
        { tag: 'div', texto: 'Frase 2', },
        { tag: 'footer', texto: 'Frase 3', },
        { tag: 'section', texto: 'Frase 4', },
    ]
    
    function criaTag(tagName) {
        const tag = document.createElement(tagName);
        return tag;
    }
    
    function inserirContentTag(tag, content) {
        tag.innerHTML = content;
        return tag;
    }
    
    function inserirElementos() {
        const sectionElement = document.body.querySelector('.container');
        
        for(let i=0 ; i < elementos.length; i++) {
            const novoElemento = criaTag(elementos[i].tag);
            const elementoComContent = inserirContentTag(novoElemento, elementos[i].texto);
            sectionElement.appendChild(elementoComContent)    
        }
    }

    inserirElementos();
})();