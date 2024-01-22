Module.register('dynamic_date', {
    // Default module config
    defaults: {},
  
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
      this.getDom().querySelector('#day').innerText = day;
      this.getDom().querySelector('#month').innerText = month;
      this.getDom().querySelector('#date').innerText = date;
    }
  });
  