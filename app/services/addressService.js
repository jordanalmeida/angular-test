angular.module("teste").factory("addressService", ($http) => {
  var _getAllAddress = (pessoaId) => {
    return $http({
      method: "GET",
      url:
        "https://www.selida.com.br/avaliacaotecnica/api/Endereco/GetAll/" +
        pessoaId,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _getOneAddress = (id) => {
    return $http({
      method: "GET",
      url: `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${id}`,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };

  var _saveAddress = (data, id) => {
    data = {
      pessoaId: id,
      ...data,
    };
    return $http({
      method: "POST",
      url: "https://www.selida.com.br/avaliacaotecnica/api/Endereco",
      data: data,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _updateAddress = (body, id) => {
    return $http({
      method: "PUT",
      url: `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${id}`,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };
  var _deleteAddress = (id) => {
    return $http({
      method: "DELETE",
      url: `https://www.selida.com.br/avaliacaotecnica/api/Endereco/${id}`,
      headers: {
        "Content-Type": "application/json",
        Chave: "063080C3-CA67-48F1-8934-E8B4937215A2",
      },
    });
  };

  return {
    getAllAddress: _getAllAddress,
    getOneAddress: _getOneAddress,
    saveAddress: _saveAddress,
    updateAddress: _updateAddress,
    deleteAddress: _deleteAddress,
  };
});
