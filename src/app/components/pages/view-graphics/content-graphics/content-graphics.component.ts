import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-content-graphics',
  templateUrl: './content-graphics.component.html',
  styleUrls: ['./content-graphics.component.scss']
})
export class ContentGraphicsComponent implements OnInit {

  @ViewChild('divGraphics', { static: true }) public chartElement!: ElementRef;

  attrSelected: any = null;
  attrArray: any = null;
  highcharts = Highcharts;
  pieChartOptions: any = {
    chart: {
      renderTo: '',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          color: '#000000',
          connectorColor: '#000000'
        },
        showInLegend: true
      }
    },
    series: [
      {
        type: 'pie',
        colorByPoint: true,
        name: '',
        data: []
      }
    ]
  };

  private chart: any;
  viewGraphics: boolean = false;
  viewSelect: boolean = false;
  private luminaires: any = null;

  constructor() {}

  async ngOnInit(): Promise<void> {
   await this.loadDataByType();
  }

  async loadDataByType() {
    this.luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    this.attrArray = [
      {type: 'tipo_soporte', name: 'Tipos Soporte'},
      {type: 'tipo_luminaria', name: 'Tipos Luminaria'},
      {type: 'tipo_lampara', name: 'Tipos Lampara'}
    ];
    this.viewSelect = true;
  }

  async changeAttribute() {
    this.viewGraphics = false;
    this.pieChartOptions.title.text = '';
    this.pieChartOptions.subtitle.text = '';
    this.pieChartOptions.series[0].data = [];
    const arrayFeatures: any[any] = await this.filterLuminaires(this.attrSelected.type);
    this.viewGraphics = await this.settingGraphicWithData(arrayFeatures, this.attrSelected.name);
  }

  async filterLuminaires(attr: any): Promise<any> {
    return this.luminaires.features.filter((elem: any) => elem.properties[`${attr}`] != null)
    .map((item: any) => item.properties[`${attr}`])
    .sort((a: any, b: any) => { return (a < b) ? -1 : (a > b) ? 1 : 0; });
  }

  async settingGraphicWithData(dataType: any, title: any): Promise<any> {
    return new Promise ( (resolve) => {
      let arrayData: any[] = [];
      let lastElement: any = dataType[0];
      let countElement: number = 0;
      const totalData = dataType.length;
      for (const data of dataType) {
        if (data === lastElement) {
          countElement++;
          lastElement = data;
        } else {
          const result = Math.round((countElement / totalData) * 100);
          arrayData.push({
            name: lastElement,
            y: Number(result),
            sliced: false,
            selected: false
          });
          countElement = 0;
          lastElement = data;
        }
      }
      this.pieChartOptions.title.text = title;
      this.pieChartOptions.subtitle.text = 'N° Total de Luminarias ' + this.luminaires.features.length;
      this.pieChartOptions.series[0].data = arrayData;
      this.pieChartOptions.chart['renderTo'] = this.chartElement.nativeElement;
      this.chart = Highcharts.chart(this.pieChartOptions);
      resolve(true);
    });
  }

}
