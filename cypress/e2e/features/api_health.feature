Feature: Health Check da API (Backend)
  
  @api @smoke
  Scenario: Validar disponibilidade e contrato da lista de produtos
    Given que o sistema possui o endpoint "/list.json"
    When uma requisição "GET" é enviada
    Then o status code da resposta deve ser 200
    And o formato da resposta deve ser "application/json"
    And a lista de produtos não deve estar vazia
    And o produto "Espresso" deve estar presente na lista