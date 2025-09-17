function pegarValores() {
            let n1 = parseFloat(document.getElementById("n1").value);
            let n2 = parseFloat(document.getElementById("n2").value);

            // Se não for número, vira 0
            if (isNaN(n1)) n1 = 0;
            if (isNaN(n2)) n2 = 0;

            return { n1, n2 };
        }

        function somar() {
            const { n1, n2 } = pegarValores();
            document.getElementById("resultado").innerText = "A soma dos números é: " + (n1 + n2);
        }

        function Subtrair() {
            const { n1, n2 } = pegarValores();
            document.getElementById("resultado").innerText = "A subtração dos números é: " + (n1 - n2);
        }

        function Multiplicar() {
            const { n1, n2 } = pegarValores();
            document.getElementById("resultado").innerText = "A multiplicação dos números é: " + (n1 * n2);
        }

        function Dividir() {
            const { n1, n2 } = pegarValores();
            if (n2 === 0) {
                document.getElementById("resultado").innerText = "Não é possível dividir por 0!";
            } else {
                document.getElementById("resultado").innerText = "A divisão dos números é: " + (n1 / n2);
            }
        }