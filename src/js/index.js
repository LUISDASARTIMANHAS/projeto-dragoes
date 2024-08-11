window.addEventListener("load", () => {
  const btns = document.querySelectorAll(".btn");
  const imgs = document.querySelectorAll(".img");
  const infos = document.querySelectorAll(".info");

  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    const img = imgs[i];
    const info = infos[i];

    btn.addEventListener("click", () => {
      alternarBotaoSelecionado(btn);
      alternarImagemDeFundo(img);
      alternarInformacao(info);
    });
  }

  function alternarImagemDeFundo(img) {
    const imgAtiva = document.querySelector(".ativa");
    imgAtiva.classList.remove("ativa");
    img.classList.add("ativa");
  }

  function alternarInformacao(info) {
    const infoAtiva = document.querySelector(".info.ativa");
    infoAtiva.classList.remove("ativa");
    info.classList.add("ativa");
  }

  function alternarBotaoSelecionado(btn) {
    const btnSelecionado = document.querySelector(".selecionado");
    btnSelecionado.classList.remove("selecionado");
    btn.classList.add("selecionado");
  }
});
