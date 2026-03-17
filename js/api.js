const BASE_URL = "https://dummyjson.com/posts";

// GET posts
export async function getPosts() {
    const res = await fetch(BASE_URL);
    return await res.json();
}

// GET buscar posts
export async function searchPosts(query) {
    const res = await fetch(`${BASE_URL}/search?q=${query}`);
    return await res.json();
}

// POST crear post
export async function createPost(data) {
    const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}