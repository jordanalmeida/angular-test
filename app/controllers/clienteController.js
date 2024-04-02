angular
  .module("teste")
  .controller(
    "clienteController",
    function ($scope, $http, clienteService, addressService) {
      $scope.contatos = [];
      var _pessoaId;
      var carregarCliente = () => {
        clienteService
          .getClientes()
          .then((data) => {
            console.log(data.data.data, "data");
            $scope.contatos = data.data.data;
          })
          .catch((err) => {
            console.log("err", err.data);
          });
      };

      $scope.createCliente = (cliente, address) => {
        clienteService
          .saveCliente(cliente)
          .then((data) => {
            console.log(data.data, "data");
            _pessoaId = data.data.data;
            console.log(_pessoaId, 'pessoa')
            addressService
              .saveAddress(address, _pessoaId)
              .then(() => {
                _navigateBack();
                console.log(data.data.data, "data");
              })
              .catch((err) => {
                _navigateBack();
                console.log("err", err.data);
              });
            
          })
          .catch((err) => {
            console.log("err", err.data);
          });
      };

      $scope.navigate = () => {
        window.location = "/app/view/cadastro.html";
      };
      
      var _navigateBack = () => {
        window.location = "/";
      };

      $scope.navigateBack = () => {
        _navigateBack();
      }
      $scope.deleteCliente = (clienteId) => {
        clienteService
          .deleteCliente(clienteId)
          .then((data) => {
            console.log(data.data.data, "data");
            carregarCliente();
          })
          .catch((err) => {
            console.log("err", err.data);
          });
      };
      $scope.add = (pessoa) => {
        $scope.pessoa.push(angular.copy(pessoa));
        $http
          .post(
            "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/",
            pessoa
          )
          .then((data) => {
            console.log(data, "data");
            carregarCliente();
          })
          .catch((err) => {
            console.log("err", err.data);
          });
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
      };

      $scope.apagar = (contatos) => {
        $scope.contatos = contatos.filter((item) => !item?.selecionado);
      };

      $scope.isContatoSelecionado = (contatos) => {
        return contatos.some((item) => item?.selecionado == true);
      };

      carregarCliente();
    }
  );
