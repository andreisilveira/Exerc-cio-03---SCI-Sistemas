function inserirDados() {


    let continuar = true;
    while (continuar) {
        const nome = prompt("Digite o nome do aluno:");
        const nota1 = parseFloat(prompt("Digite a nota 1:"));
        const nota2 = parseFloat(prompt("Digite a nota 2:"));
        const nota3 = parseFloat(prompt("Digite a nota 3:"));
        const nota4 = parseFloat(prompt("Digite a nota 4:"));
        const media = (nota1 + nota2 + nota3 + nota4) / 4;
        let situacao;
        if (media < 6) {
            situacao = "Reprovado";
        } else {
            situacao = "Aprovado";
        }
        const mensagem = "O aluno " + nome + " obteve média " + media.toFixed(2) + " e está " + situacao + ".";
        document.getElementById("resultado").innerHTML += mensagem + "<br><br>";
        const resposta = prompt("Deseja continuar? (s/n)");
        if (resposta.toLowerCase() === "n") {
            continuar = false;
        }
    }
}