# Estrutura basica
## describe('descrição',function(){...})
  `É utilizado para descrever qual classe/arquivo/metodo o é referente este bloco de teste`
## context('case1.. case2..', function(){...})
  `É utilizado para testar as variações de casos de um mesmo metodo.`
  `Ex: Quando temos um if e o fluxo do metodo é diferente para cada caso`
## it('deve acontecer tal coisa', function(){...})
  `É onde realmente ocorre o teste`


# Smoke Test
  `É o primeiro teste feito. Utilizado para verificações basicas e iniciais, como:`
  `O modulo/lib principal existem ?`
  `Os metodos existem ?`
  `As variaveis existem ?`
  `As variaveis são do tipo certo ? (String ? Number ? Array ? Obj ?) `



# Parametros para auxiliar com os testes
## --bail
  `Os testes são parados no primeiro no primeiro fail`
## x.only
  `Executa somente o bloco de teste marcado com only`.
## x.skip
  `Não executa os blocos de testes marcados com skipt `


# Hooks
`São ações executadas a partir de algum momento definido`
## before(function(){...});
  `Roda uma vez no bloco PAI, antes de iniciar os testes. SOMENTE UMA VEZ.`
## after(function(){...});
  `Roda uma vez no bloco PAI, depois de finalizar os testes. SOMENTE UMA VEZ.`
## beforeEach(function(){...});
  `Roda antes de cada bloco FILHO. Se repete para todos os blocos`
## afterEach(function(){...});
  `Roda depois de cada bloco FILHO. Se repete para todos os blocos`

# Chai
## expect BDD API guide
  `https://www.chaijs.com/api/bdd/`
