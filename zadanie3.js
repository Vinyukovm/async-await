// Задание 3

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('#data-container');

    const toggleLoader = () => {
        const loader = document.querySelector('#loader');
        const hidden = loader.hasAttribute('hidden');
        if (hidden) {
            loader.removeAttribute('hidden');
        } else {
            loader.setAttribute('hidden', '');
        }
    };
const createAlbumElement = (text) => {
    const elementLi = document.createElement('li');
    elementLi.textContent = text;

    return elementLi;
}

const renderAlbums = async () => {
    toggleLoader();

    try {
        const response = await fetch(ALBUM_URL);
        const albums = await response.json();
        console.log(albums);
        albums.forEach(item => {
            const newAlbumElement = createAlbumElement(item.title);
            dataContainer.append(newAlbumElement);
        });
    } catch(error) {
        console.error(error);
        dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
    } finally {
        toggleLoader();
    }
}   

renderAlbums();