export const fetchPhotos = async (page, limit) => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch photos');
    }
    const data = await response.json();
    return data;
};