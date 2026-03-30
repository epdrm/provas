function abrirFormulario(url, titulo) {
    // Adicionar ?embedded=true ao URL se for um formulário Google
    if (url.includes('forms.gle') || url.includes('docs.google.com/forms')) {
        if (!url.includes('?')) {
            url += '?embedded=true';
        } else if (!url.includes('embedded=true')) {
            url += '&embedded=true';
        }
    }
    document.getElementById('modalTitle').textContent = titulo;
    document.getElementById('formularioIframe').src = url;
    document.getElementById('formularioModal').style.display = 'flex';
}

function fecharFormulario() {
    document.getElementById('formularioModal').style.display = 'none';
    document.getElementById('formularioIframe').src = '';
}

window.onclick = function (event) {
    const modal = document.getElementById('formularioModal');
    if (event.target == modal) {
        fecharFormulario();
    }
}