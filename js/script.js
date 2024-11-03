document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;

    if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem.');
        event.preventDefault();
    }
});

const cidadesPorEstado = {
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
    AP: ["Macapá", "Santana", "Laranjal do Jari"],
    AM: ["Manaus", "Parintins", "Itacoatiara"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
    DF: ["Brasília"],
    ES: ["Vitória", "Vila Velha", "Serra"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
    MA: ["São Luís", "Imperatriz", "Caxias"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
    PA: ["Belém", "Ananindeua", "Santarém"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita"],
    PR: ["Curitiba", "Londrina", "Maringá"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda"],
    PI: ["Teresina", "Parnaíba", "Picos"],
    RJ: ["Rio de Janeiro", "Niterói", "Duque de Caxias"],
    RN: ["Natal", "Mossoró", "Parnamirim"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
    RR: ["Boa Vista", "Rorainópolis", "Caracaraí"],
    SC: ["Florianópolis", "Joinville", "Blumenau"],
    SP: ["São Paulo", "Campinas", "Santos"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
    TO: ["Palmas", "Araguaína", "Gurupi"]
};

// Função para atualizar as cidades com base no estado selecionado
document.getElementById("estado").addEventListener("change", function() {
    const estadoSelecionado = this.value;
    const cidadesSelect = document.getElementById("cidade");
    
    // Limpa as opções de cidade
    cidadesSelect.innerHTML = "<option value=''>Selecione sua cidade</option>";
    
    if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
        const cidades = cidadesPorEstado[estadoSelecionado];
        
        // Adiciona cada cidade como uma nova opção no select
        cidades.forEach(cidade => {
            const option = document.createElement("option");
            option.value = cidade;
            option.textContent = cidade;
            cidadesSelect.appendChild(option);
        });
    }
});