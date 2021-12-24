defmodule Exlivery.Users.AgentTest do
  use ExUnit.Case

  alias Exlivery.Users.Agent, as: UserAgent
  alias Exlivery.Users.User

  import Exlivery.Factory

  describe "save/1" do
    test "saves the user" do
      user = build(:user)

      UserAgent.start_link(%{})

      assert UserAgent.save(user) == :ok
    end
  end

  describe "get/1" do
    setup do
      UserAgent.start_link(%{})

      fake_cpf = "12345678900"

      {:ok, fake_cpf: fake_cpf}
    end

    test "when the user is found, returns the user", %{fake_cpf: fake_cpf} do
      :user
      |> build(cpf: fake_cpf)
      |> UserAgent.save()

      response = UserAgent.get(fake_cpf)

      expected_response =
        {:ok,
         %User{
           address: "Rua das Bananeiras, 35",
           age: 20,
           cpf: "12345678900",
           email: "matheus@pedroni.com",
           name: "Matheus"
         }}

      assert response == expected_response
    end

    test "when the user is not found, returns an error", %{fake_cpf: fake_cpf} do
      :user
      |> build(cpf: fake_cpf)
      |> UserAgent.save()

      response = UserAgent.get("nonexistent_cpf")

      expected_response = {:error, "User not found"}

      assert response == expected_response
    end
  end
end
