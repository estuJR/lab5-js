import { getPosts, searchPosts, createPost } from "./api.js";
import { renderPosts, setStatus } from "./ui.js";

// Cargar posts al inicio
async function loadPosts() {
    try {
        setStatus("loading");

        const data = await getPosts();

        if (data.posts.length === 0) {
            setStatus("empty");
        } else {
            setStatus("success");
            renderPosts(data.posts);
        }

    } catch (error) {
        setStatus("error");

        const retryBtn = document.getElementById("retryBtn");
        if (retryBtn) {
            retryBtn.addEventListener("click", loadPosts);
        }
    }
}

// Ejecutar al iniciar
loadPosts();

// 🔍 BUSCAR POSTS
document.getElementById("searchBtn").addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value;

    try {
        setStatus("loading");

        const data = await searchPosts(query);

        if (data.posts.length === 0) {
            setStatus("empty");
            renderPosts([]);
        } else {
            setStatus("success");
            renderPosts(data.posts);
        }

    } catch (error) {
        setStatus("error");
    }
});

// 📝 CREAR POST
document.getElementById("createBtn").addEventListener("click", async () => {
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    if (!title || !body) {
        alert("Completa todos los campos");
        return;
    }

    try {
        setStatus("loading");

        await createPost({
            title,
            body,
            userId: 1
        });

        setStatus("success");
        alert("✅ Post creado correctamente");

        // limpiar inputs
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";

        loadPosts();

    } catch (error) {
        setStatus("error");
    }
});