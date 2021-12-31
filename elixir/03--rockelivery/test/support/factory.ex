defmodule Rockelivery.Factory do
  use ExMachina

  def user_params_factory do
    %{
      age: 20,
      address: "Rua das Bananeiras, 15",
      cep: "12345678",
      cpf: "12345678900",
      email: "matheus@pedroni.com",
      password: "123456",
      name: "Matheus Pedroni"
    }
  end
end
