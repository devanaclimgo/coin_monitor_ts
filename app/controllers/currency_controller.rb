class CurrencyController < ApplicationController
  def index
    currencies = [
      { code: "USD-BRL" },
      { code: "EUR-BRL" },
      { code: "BTC-BRL" }
    ]

    @chart_data = currencies.map do |currency|
      url = URI("https://economia.awesomeapi.com.br/json/daily/#{currency[:code]}/15")
      response = Net::HTTP.get(url)
      data = JSON.parse(response)

      {
        name: currency[:code],
        data: data.each_with_object({}) do |entry, hash|
          date = Time.at(entry["timestamp"].to_i).strftime("%d/%m/%y")
          hash[date] = entry["high"].to_f
        end
      }
    end

    render json: @chart_data
  end
end
