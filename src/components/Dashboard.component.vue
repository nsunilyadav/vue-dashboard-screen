<template>
  <b-container>
    <DashboardTableComponent
      :items="items"
      :fields="fields"
      :isLoading="isLoading"
    />
    <DashboardChartComponent
      :items="items"
      :fields="fields"
      :isLoading="isLoading"
      :chartOptions="chartOptions"
      :series="series"
    />
  </b-container>
</template>

<script>
import axios from "axios";
import DashboardChartComponent from "./DashboardChart.component";
import DashboardTableComponent from "./DashboardTable.component";

export default {
  components: {
    DashboardChartComponent,
    DashboardTableComponent,
  },
  data() {
    return {
      symbol: "IBM",
      isLoading: true,
      interval: "5min",
      fields: [
        {
          key: "date",
          sortable: false,
        },
        {
          key: "symbol",
          sortable: false,
        },
        {
          key: "open",
          sortable: false,
        },
        {
          key: "high",
          sortable: false,
        },
        {
          key: "low",
          sortable: false,
        },
        {
          key: "close",
          sortable: false,
        },
      ],
      items: [],
      series: [],
      chartOptions: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "CandleStick Symbol Chart",
          align: "left",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const params = {
        function: "TIME_SERIES_INTRADAY",
        symbol: this.symbol,
        interval: this.interval,
        outputsize: "full",
        apikey: "demo",
      };
      console.log("cde");
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: params,
      });
      this.isLoading = false;

      const { data } = response;
      const finalData = [];
      const chartData = [];

      const dynamicKey = `Time Series (${this.interval})`;
      for (const date in data[dynamicKey]) {
        if (Object.hasOwnProperty.call(data[dynamicKey], date)) {
          const obj = data[dynamicKey][date];
          const open = obj["1. open"];
          const high = obj["2. high"];
          const low = obj["3. low"];
          const close = obj["4. close"];
          data[dynamicKey][date].open = open;
          data[dynamicKey][date].high = high;
          data[dynamicKey][date].low = low;
          data[dynamicKey][date].close = close;
          data[dynamicKey][date].date = date;
          data[dynamicKey][date].symbol = this.symbol;

          chartData.push({
            x: new Date(date),
            y: [open, high, low, close],
          });

          finalData.push(obj);
        }
      }
      this.items = finalData.slice(0, 5);
      this.series = [{ data: chartData }];
    },
  },
};
</script>

<style>
.custom-bg {
  background: #fff;
}
</style>
