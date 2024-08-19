import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/books/v1';

export const getRandomBook = async (keyword, startIndex) => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
    try {
        const response = await axios.get(`${API_BASE_URL}/volumes`, {
            params: {
                q: keyword,
                maxResults: 1,
                startIndex: startIndex,
                key: API_KEY,
            },
        });

        const book = response.data.items[0];
        return {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors?.[0],
            cover: book.volumeInfo.imageLinks?.extraLarge || book.volumeInfo.imageLinks?.large || book.volumeInfo.imageLinks?.thumbnail,
            genre: book.volumeInfo.categories?.[0],
        };
    } catch (error) {
        console.error('Error fetching book data:', error);
    }
};