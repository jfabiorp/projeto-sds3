import Chart from 'react-apexcharts'
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale';
//import axios;


type ChartData = {
    labels: string[];
    series: number[];

}


function DonutChart() {
    //forma errada 
    let chartData : ChartData = { labels: [], series: []  };

   //forma errada
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
                const data = response.data as SaleSum[]
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);
                 
                chartData = {labels: myLabels, series: mySeries} ;
                
                console.log(response.data);
        });

 //   const mockData = {
 //       series: [477138, 499928, 444867, 220426, 473088],
 //       labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
 //   }

    const options = {
        legend: {
            show: true
        }
    }


    return ( // antes do return tem os dados que vai retornar deposi do return 
        <Chart
            options={{ ...options, labels: chartData.labels }}  //... que pode incluir mais objetos
            series={chartData.series}
            type="donut"
            height="240"


        />


    );
}

export default DonutChart;