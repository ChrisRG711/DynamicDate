Module.register('dynamic_date', {
    // Default module config with color options
    defaults: {
      backgroundColor: '#fff',
      textColor: '#2f2f2f',
      strongBackgroundColor: '#fd9f1b',
      strongTextColor: '#fff',
      dashedLineColor: '#f37302',
      shadowColor: '#bdbdbd'
      // Add any other color options you want to make configurable
    },
  
    // Override the start method
    start: function () {
      this.updateDynamicDate();
      setInterval(() => this.updateDynamicDate(), 1000); // Update every second, for example
    },
  
    // Function to update the date dynamically
    updateDynamicDate: function () {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      const currentDate = new Date();
      const day = daysOfWeek[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const date = currentDate.getDate();
  
      // Update the content of the elements
      this.updateDom(1000); // Animation speed: 1000 ms
      const dynamicDate = this.getDom().querySelector('#dynamicDate');
      dynamicDate.style.backgroundColor = this.config.backgroundColor;
      dynamicDate.style.boxShadow = `0 1px 0 ${this.config.shadowColor}, 0 2px 0 #fff, 0 3px 0 ${this.config.shadowColor}, 0 4px 0 #fff, 0 5px 0 ${this.config.shadowColor}, 0 0 0 1px ${this.config.shadowColor}`;
      dynamicDate.querySelector('#day').innerText = day;
      dynamicDate.querySelector('#month').innerText = month;
      dynamicDate.querySelector('#date').innerText = date;
  
      const strongElement = dynamicDate.querySelector('strong');
      strongElement.style.backgroundColor = this.config.strongBackgroundColor;
      strongElement.style.color = this.config.strongTextColor;
      strongElement.style.borderBottom = `1px dashed ${this.config.dashedLineColor}`;
  
      dynamicDate.querySelector('em').style.color = this.config.strongBackgroundColor;
      dynamicDate.querySelector('span').style.color = this.config.textColor;
    }
  });
  