defmodule ListFilterTest do
  use ExUnit.Case
  doctest ListFilter

  describe "call/1" do
    test "get (equivalent) odd numbers from a string list" do
      list1 = ["1", 2, 3, "banana", "elixir", 9]
      list2 = ["elixir", 9]
      list3 = []

      assert ListFilter.call(list1) == 3
      assert ListFilter.call(list2) == 1
      assert ListFilter.call(list3) == 0
    end
  end
end
