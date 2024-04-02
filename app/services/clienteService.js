angular.module("teste").factory("clienteService", ($http) => {
  var _getClientes = () => {
    return $http({
      method: "GET",
      url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll",
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _getOneCliente = () => {
    return $http({
      method: "GET",
      url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll",
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };

  var _saveCliente = (data) => {
    return $http({
      method: "POST",
      url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _updateCliente = (body, id) => {
    return $http({
      method: "PUT",
      url: `https://www.selida.com.br/avaliacaotecnica/api/Pessoas/${id}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _deleteCliente = (id) => {
    return $http({
      method: "DELETE",
      url: `https://www.selida.com.br/avaliacaotecnica/api/Pessoas/${id}`,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };

  return {
    getClientes: _getClientes,
    getOneCliente: _getOneCliente,
    saveCliente: _saveCliente,
    updateCliente: _updateCliente,
    deleteCliente: _deleteCliente,
  };
});
