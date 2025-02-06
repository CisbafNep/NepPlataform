 // Seleciona todos os botões de cabeçalho do acordeão
 var accordions = document.querySelectorAll(".accordion-head");

 // Adiciona um ouvinte de evento para cada botão de cabeçalho
 accordions.forEach(function (accordion) {
     accordion.addEventListener("click", function() {
         // Alterna a exibição do conteúdo
         var body = this.nextElementSibling;
         
         if (body.style.display === "block") {
             body.style.display = "none"; // Se estiver aberto, fecha
         } else {
             body.style.display = "block"; // Se estiver fechado, abre
         }
     });
 });