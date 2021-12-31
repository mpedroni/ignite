defmodule Rockelivery.Factory do
  use ExMachina.Ecto, repo: Rockelivery.Repo

  alias Rockelivery.User

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

  def user_factory do
    %User{
      age: 20,
      address: "Rua das Bananeiras, 15",
      cep: "12345678",
      cpf: "12345678900",
      email: "matheus@pedroni.com",
      password: "123456",
      name: "Matheus Pedroni",
      id: "70171f01-df8e-43e7-af6d-28362eaf94b4"
    }
  end
end
