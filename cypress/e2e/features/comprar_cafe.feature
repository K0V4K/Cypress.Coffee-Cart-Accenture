Feature: Compra de Cafés no Coffee Cart

  Scenario: Realizar fluxo de compra completa aproveitando a promoção
    Given que o usuário acessa a loja virtual
    When ele adiciona os seguintes produtos ao carrinho:
      | Espresso           |
      | Espresso-Macchiato |
      | Cappuccino         |
    And aceita a oferta promocional do item "Mocha"
    Then o carrinho deve contabilizar 4 itens
    When ele remove o primeiro item da lista
    And finaliza o pagamento com dados financeiros válidos
    Then deve visualizar a mensagem de confirmação "Thanks for your purchase. Please check your email for payment."