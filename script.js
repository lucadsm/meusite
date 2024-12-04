// Referências aos botões e ao contêiner de resultados
const pagarBtn = document.getElementById('pagarBtn');
const gerarBtn = document.getElementById('gerarBtn');
const resultados = document.getElementById('resultados');

// Variável para verificar se o pagamento foi realizado e os números já foram gerados
let numerosGerados = false;

// Função para gerar e exibir números
function gerarNumeros() {
    if (numerosGerados) {
        alert('Os números já foram gerados.');
        return; // Se os números já foram gerados, não faz nada
    }

    resultados.innerHTML = ""; // Limpa os números anteriores

    // Gerar 6 números aleatórios únicos entre 1 e 60
    const numeros = [];
    while (numeros.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    // Ordenar os números em ordem crescente
    numeros.sort((a, b) => a - b);

    // Adicionar os números ao contêiner como quadrados
    numeros.forEach((num) => {
        const div = document.createElement("div");
        div.className = "numero";
        div.textContent = num;
        resultados.appendChild(div);
    });

    // Marcar que os números foram gerados e desabilitar o botão
    numerosGerados = true;
    gerarBtn.style.display = 'none'; // Esconde o botão de "Gerar Números"
    pagarBtn.textContent = 'Gerar Novos Números'; // Atualiza o texto do botão
    pagarBtn.style.display = 'inline-block'; // Exibe o botão de "Gerar Novos Números"
}

// Simulando o pagamento
pagarBtn.addEventListener('click', () => {
    if (!numerosGerados) {
        pagarBtn.textContent = 'Processando pagamento...';

        // Simulando uma API de pagamento com delay de 1 segundo
        setTimeout(() => {
            pagarBtn.textContent = 'Pagamento confirmado!';
            pagarBtn.disabled = true; // Desabilita o botão de pagamento
            gerarBtn.style.display = 'inline-block'; // Exibe o botão de gerar números
            alert('Pagamento concluído com sucesso! O botão de geração foi desbloqueado.');
        }, 1000); // Simula 1 segundo de delay para o pagamento
    } else {
        gerarNumeros(); // Se já gerou números, permite gerar novos números
    }
});

// Gerar números ao clicar no botão "Gerar Números"
gerarBtn.addEventListener('click', gerarNumeros);
