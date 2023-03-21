const tabela = document.getElementById("tabela");
const cabecalho = tabela.createTHead();
const linhaCabecalho = cabecalho.insertRow();
const colunas = ["Código", "Nome", "E-mail", "Empresa", "Cidade", "Telefone"];

// Adiciona as colunas ao cabeçalho
colunas.forEach(coluna => {
    const th = document.createElement("th");
    th.innerText = coluna;
    linhaCabecalho.appendChild(th);
});

// Carrega os dados do arquivo PHP
fetch('conexao.php')
    .then(response => response.json())
    .then(dados => {
        // Preenche a tabela com os dados
        const corpoTabela = tabela.createTBody();
        dados.forEach(item => {
            const linha = corpoTabela.insertRow();
            linha.insertCell().innerText = item.codigo;
            linha.insertCell().innerText = item.nome;
            linha.insertCell().innerText = item.email;
            linha.insertCell().innerText = item.empresa;
            linha.insertCell().innerText = item.cidade;
            linha.insertCell().innerText = item.phone;
        });
    });
