document.addEventListener('WebComponentsReady', () => {
  describe('Basic test cases', () => {
    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-heatmap-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          window.flush(done);
        });
      });
    });

    it('Just very basic simple chart', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(2, 2);

      waitDrawUpdate(chart, () => {
        done();
      });
    });


    it('Just very basic simple chart with values', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(3, 2);
      chart.showCellValue = true;

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic simple chart with custom colors', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(6, 6);
      chart.colors = ['red', 'green'];

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic simple chart without color scale', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(12, 4);
      chart.colors = ['red', 'pink'];

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic simple chart with xaxis label', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(6, 6);
      chart.xAxisConfig = {
        'title': 'X Axis Label',
        'orientation': 'bottom',
        'labelPosition': 'center'
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic simple chart with yaxis label', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(6, 6);
      chart.yAxisConfig = {
        'title': 'Y Axis Label',
        'orientation': 'left',
        'labelPosition': 'center'
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic simple chart with label on both axises', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(6, 6);
      chart.xAxisConfig = {
        'title': 'X Axis Label',
        'orientation': 'bottom',
        'labelPosition': 'center'
      };
      chart.yAxisConfig = {
        'title': 'Y Axis Label',
        'orientation': 'left',
        'labelPosition': 'center'
      };

      waitDrawUpdate(chart, () => {
        done();
      });
    });

    it('Just very basic but big chart', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      // TODO 128x128 was too much
      chart.chartData = generateChartData(64, 64);
      chart.colors = ['red', 'green', 'blue'];

      waitDrawUpdate(chart, () => {
        done();
      });
    });

  });
});