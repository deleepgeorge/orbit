import { Component, OnInit } from '@angular/core';
import { AdminDashBoardService } from '../services/admin-dash-service';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
  
export class AdminComponent implements OnInit {
  surveyAggr: any;
  highCharts: typeof Highcharts = Highcharts;
  chartOptions: any; 
  
  constructor(private surveyService: AdminDashBoardService) {    
  }

  ngOnInit() {
    this.surveyAggr = this.surveyService.getSurveyAggreration();    
    this.chartOptions = {
      chart: { type: "line" },
      title: { text: "S response" },
      subtitle: { text: "Per month" },
      xAxis: {categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: { title: { text: "S response" } },
      tooltip: { valueSuffix: "tooltip" },
      series: [
        {
          name: "Res",
           data: this.surveyAggr
        },
        {
          name: "IBX",
           data: [45,12,10,34,12,23,66,11,20,26,40,22]
        },
        {
          name: "LOC",
           data: [55,16,34,67,27,40,12,31,10,66,30,32]
        },
      ]
    };
  }
}
