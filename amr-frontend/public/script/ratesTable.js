// create an instance of the dataTables with AJAX call
new DataTable('#rateTable', {
  ajax: 'data/rates.json', // GET the rates table data from json file
  columns: [ // pass the data to desired columns
    { data: 'vehicle_type' },
    { data: 'make_and_model' },
    { data: 'number_of_passengers' },
    { data: 'hourly_rate' },
    { data: 'additional_charges' }
  ]
});
