// Renderizar posts
export function renderPosts(posts) {
    const container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";
        div.style.borderRadius = "8px";

        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

        container.appendChild(div);
    });
}

// Manejo de estados UI
export function setStatus(type) {
    const statusDiv = document.getElementById("status");

    if (type === "loading") {
        statusDiv.innerHTML = "<p>🔄 Cargando...</p>";
    }

    if (type === "success") {
        statusDiv.innerHTML = "<p>✅ Cargado correctamente</p>";
    }

    if (type === "empty") {
        statusDiv.innerHTML = "<p>⚠️ No hay resultados</p>";
    }

    if (type === "error") {
        statusDiv.innerHTML = `
            <p>❌ Error al cargar</p>
            <button id="retryBtn">Reintentar</button>
        `;
    }

    if (type === "idle") {
        statusDiv.innerHTML = "";
    }
}