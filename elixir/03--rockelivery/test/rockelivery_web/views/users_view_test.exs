defmodule RockeliveryWeb.UsersViewTest do
  use RockeliveryWeb.ConnCase, async: true

  import Phoenix.View
  import Rockelivery.Factory

  alias RockeliveryWeb.UsersView

  test "renders create.json" do
    user = build(:user)

    response = render(UsersView, "create.json", user: user)

    assert %{
             message: "User created",
             user: %Rockelivery.User{
               address: "Rua das Bananeiras, 15",
               age: 20,
               cep: "12345678",
               cpf: "12345678900",
               email: "matheus@pedroni.com",
               id: "70171f01-df8e-43e7-af6d-28362eaf94b4",
               inserted_at: nil,
               name: "Matheus Pedroni",
               password: "123456",
               password_hash: nil,
               updated_at: nil
             }
           } = response
  end
end
