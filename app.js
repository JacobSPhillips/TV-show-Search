const form = document.querySelector('#searchForm')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    if (res.data) delImg();
    getImg(res.data);
    form.elements.query.value = "";
})

const getImg = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const myImg = document.createElement('img')
            myImg.src = show.show.image.medium
            document.querySelector('#showSect').append(myImg)
        }
    }
}

const delImg = () => {
    const element = document.getElementById("showSect");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

