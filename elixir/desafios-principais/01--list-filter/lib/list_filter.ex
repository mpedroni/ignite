defmodule ListFilter do
  require Integer

  def call(list) do
    list
    |> get_integers()
    |> Enum.filter(fn elem -> Integer.is_odd(elem) end)
    |> Enum.count()
  end

  defp get_integers(list),
    do:
      list
      |> Enum.map(&is_number_like?/1)
      |> Enum.filter(&is_integer/1)

  defp is_number_like?(elem) when is_number(elem), do: elem

  defp is_number_like?(string) do
    result = Integer.parse(string)

    case result do
      {number, _remainder} ->
        number

      :error ->
        nil
    end
  end
end
