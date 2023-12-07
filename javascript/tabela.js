const searchInput = document.getElementById("search");
const tableRows = document.querySelectorAll(".responstable tbody tr");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  tableRows.forEach(function (row) {
    const cells = row.getElementsByTagName("td");
    let matchFound = false;

    for (let i = 0; i < cells.length; i++) {
      const cellText = cells[i].textContent.toLowerCase();

      if (cellText.includes(searchValue)) {
        matchFound = true;
        break;
      }
    }

    if (matchFound) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

function modal(...linha) {
  console.log(linha);
  var modal = document.getElementById("modal");
  var overlay = document.getElementById("overlay");
  modal.style.display = "block";

  // preencher o input com os dados vindo do banco
  let containerModal = document.getElementById("modal");
  containerModal.querySelector("#nome1").placeholder = linha[0];
  containerModal.querySelector("#number").placeholder = linha[1];
  containerModal.querySelector("#gender").placeholder = linha[2];
  containerModal.querySelector("#password").placeholder = linha[3];
  containerModal.querySelector("#rua").placeholder = linha[4];
  containerModal.querySelector("#log").onclick = function () {
    gerarLog(linha[5]);
  };
  setTimeout(function () {
    modal.style.opacity = "1";
    overlay.style.display = "block";
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");
  }, 10);
}

// FUNÇÃO PARA FECHAR MODAL CLICANDO NO OLHO

document.getElementById("closeModal").addEventListener("click", function () {
  var modal = document.getElementById("modal");
  var overlay = document.getElementById("overlay");
  modal.style.opacity = "0";

  setTimeout(function () {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
  }, 200);
});

// FUNÇÃO PARA FECHAR FORA DO CAMPO DO MODAL, ENQUANTO ELE ESTÁ ABERTO
function fecharModal() {
  var modal = document.getElementById("modal");
  var overlay = document.getElementById("overlay");
  modal.style.opacity = "0";

  setTimeout(function () {
    modal.style.display = "none";
    overlay.style.display = "none"; // Esconde o overlay
    document.body.classList.remove("modal-open"); // Remove a classe do body
    document.documentElement.classList.remove("modal-open"); // Remove a classe do html
  }, 200);
}

function gerarLog(idUsuario) {
  // Mostra o segundo modal e seu overlay
  document.getElementById("modalLogs").style.display = "block";
  document.getElementById("overlayLogs").style.display = "block";

  // Carrega os logs do usuário no modal
  carregarLogsUsuario(idUsuario);
}
