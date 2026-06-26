document.addEventListener('DOMContentLoaded', () => {
    const botaoSituacao = document.getElementById('btn-situacao');
    const statusContainer = document.getElementById('status-container');
    const statusTexto = document.getElementById('status-texto');

    const estados = [
        {
            titulo: "Simbiose Monocromática",
            descricao: "O campo e a cidade agem em total sincronia. A produção orgânica e tecnológica se fundem em um ritmo contínuo de sustentabilidade urbana.",
            corFundo: "#1a1a1a",
            corTexto: "#ffffff"
        },
        {
            titulo: "Retorno às Origens (Modo Campo)",
            descricao: "A tranquilidade ganha espaço. As pessoas buscam a desconexão das redes, o silêncio da terra e o minimalismo que apenas a natureza oferece.",
            corFundo: "#2d2d2d",
            corTexto: "#e0e0e0"
        },
        {
            titulo: "Pulso Industrial (Modo Cidade)",
            descricao: "O movimento e o progresso ganham força máxima. Arranha-céus, conectividade total e a complexidade das redes dão o tom do momento atual.",
            corFundo: "#111111",
            corTexto: "#cccccc"
        }
    ];

    let indiceAtual = 0;

    botaoSituacao.addEventListener('click', () => {
        statusContainer.style.display = 'block';

        const estado = estados[indiceAtual];
        
        statusTexto.innerHTML = `<strong style="font-size: 2rem; display: block; margin-bottom: 10px;">${estado.titulo}</strong>${estado.descricao}`;
        statusContainer.style.backgroundColor = estado.corFundo;
        statusContainer.style.color = estado.corTexto;

        indiceAtual = (indiceAtual + 1) % estados.length;
    });
});
