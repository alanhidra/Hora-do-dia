function carregar() {
    // Obtém uma referência ao elemento de mensagem
    var msg = window.document.getElementById('msg')
    // Obtém uma referência ao elemento de imagem
    var img = window.document.getElementById('imagem')
    // Cria um objeto Date para obter a hora atual
    var data = new Date()
    // Obtém a hora atual usando o método getHours()
    var hora = data.getHours()
  
    // Exibe a mensagem com a hora atual usando innerHTML
    msg.innerHTML = `Agora são ${hora}, horas.`
  
    // Define a imagem e a cor de fundo com base na hora atual
    if (hora >= 0 && hora < 12) {
      // Se a hora estiver entre 0 e 12, exibe a imagem de manhã e define a cor de fundo como amarelo claro
      img.src = 'img/fotomanha.jpg'
      document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
      // Se a hora estiver entre 12 e 18, exibe a imagem de tarde e define a cor de fundo como marrom claro
      img.src = 'img/fototarde.jpg'
      document.body.style.background = '#b9846f'
    } else {
      // Se a hora estiver entre 18 e 24, exibe a imagem de noite e define a cor de fundo como cinza escuro
      img.src = 'img/fotonoite.jpg'
      document.body.style.background = '#515154'
    }
  
    // Redireciona para a mesma página a cada 5 segundos usando setInterval e a função autoRefresh()
    setInterval('autoRefresh()', 5000);
  }
  