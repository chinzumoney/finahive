import { fetchChartData } from "@/utils/finance/fetchChartDart"
import { Interval, Range } from "../../../../../../types/yfinance.global"
import AreaClosedChart from "./AreaClosedChart"
import { fetchQuote } from "@/utils/finance/fetchQuote"

export default async function MarketsChart({
    ticker,
    range,
    interval,
}: {
    ticker: string
    range: Range
    interval: Interval
}) {
    const chartData = await fetchChartData(ticker, range, interval)
    const quoteData = await fetchQuote(ticker)

    const [chart, quote] = await Promise.all([chartData, quoteData])

    const stockQuotes = chart.quotes
        ? chart.quotes
            .map((quote: any) => ({
                date: quote.date,
                close: quote.close?.toFixed(2),
            }))
            .filter((quote: { close: undefined; date: null }) => quote.close !== undefined && quote.date !== null)
        : []

    return (
        <>
            <div className="mb-0.5 font-medium">
                {quote.shortName} ({quote.symbol}){" "}
                {quote.regularMarketPrice?.toLocaleString(undefined, {
                    style: "currency",
                    currency: quote.currency,
                })}
            </div>
            {chart.quotes.length > 0 ? (
                <AreaClosedChart chartQuotes={stockQuotes} range={range} />
            ) : (
                <div className="flex h-full items-center justify-center text-center text-neutral-500">
                    No data available
                </div>
            )}
        </>
    )
}