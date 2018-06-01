
function ready() {
    let chart;

    let defaultValues = [['Country', 'Visa does not required', 'Cost'], ["India", 1, 0], ["Mexico", 1, 0], ["Côte d'Ivoire", 1, 0], ["Djibouti", 1, 0], ["Lesotho", 1, 0], ["Myanmar", 1, 0], ["Oman", 1, 0], ["Singapore", 1, 0], ["Bahrain", 1, 0], ["Benin", 1, 0], ["Cambodia", 1, 0], ["Egypt", 1, 0],
        ["Ethiopia", 1, 0], ["Gabon", 1, 0], ["Guinea-Bissau", 1, 0], ["Kenya", 1, 0], ["Qatar", 1, 0], ["Rwanda", 1, 0], ["Sri Lanka", 1, 0], ["Uganda", 1, 0], ["Zambia", 1, 0], ["Zimbabwe", 1, 0],
        ["Antigua and Barbuda", 1, 0], ["Argentina", 1, 0], ["Armenia", 1, 0], ["Azerbaijan", 1, 0], ["Bahamas", 1, 0], ["Barbados", 1, 0], ["Belarus", 1, 0], ["Bolivia", 1, 0], ["Bosnia and Herzegovina", 1, 0],
        ["Botswana", 1, 0], ["Brazil", 1, 0], ["Brunei", 1, 0], ["Chile", 1, 0], ["Colombia", 1, 0], ["Costa Rica", 1, 0], ["Cuba", 1, 0], ["Dominica", 1, 0], ["Dominican Republic", 1, 0], ["Ecuador", 1, 0],
        ["El Salvador", 1, 0], ["Fiji", 1, 0], ["Georgia", 1, 0], ["Grenada", 1, 0], ["Guatemala", 1, 0], ["Guyana", 1, 0], ["Haiti", 1, 0], ["Honduras", 1, 0], ["Indonesia", 1, 0], ["Israel", 1, 0], ["Jamaica", 1, 0],
        ["Kazakhstan", 1, 0], ["Kyrgyzstan", 1, 0], ["Laos", 1, 0], ["Macedonia", 1, 0], ["Malaysia", 1, 0], ["Mauritius", 1, 0], ["Micronesia", 1, 0], ["Moldova", 1, 0], ["Mongolia", 1, 0], ["Montenegro", 1, 0],
        ["Morocco", 1, 0], ["Namibia", 1, 0], ["Nauru", 1, 0], ["Nicaragua", 1, 0], ["Panama", 1, 0], ["Paraguay", 1, 0], ["Peru", 1, 0], ["Philippines", 1, 0], ["Saint Kitts and Nevis", 1, 0], ["Saint Lucia", 1, 0],
        ["Saint Vincent and the Grenadines", 1, 0], ["Samoa", 1, 0], ["Senegal", 1, 0], ["Serbia", 1, 0], ["Seychelles", 1, 0], ["South Africa", 1, 0], ["South Korea", 1, 0], ["Swaziland", 1, 0],
        ["São Tomé and Príncipe", 1, 0], ["Tajikistan", 1, 0], ["Thailand", 1, 0], ["Trinidad and Tobago", 1, 0], ["Tunisia", 1, 0], ["Turkey", 1, 0], ["Ukraine", 1, 0], ["Uruguay", 1, 0], ["Uzbekistan", 1, 0],
        ["Vanuatu", 1, 0], ["Venezuela", 1, 0], ["Vietnam", 1, 0], ["Albania", 1, 0], ["Bangladesh", 1, 0], ["Cape Verde", 1, 0], ["Comoros", 1, 0], ["Iran", 1, 0], ["Jordan", 1, 0], ["Lebanon", 1, 0], ["Madagascar", 1, 0],
        ["Maldives", 1, 0], ["Marshall Islands", 1, 0], ["Mauritania", 1, 0], ["Mozambique", 1, 0], ["Nepal", 1, 0], ["Palau", 1, 0], ["Somalia", 1, 0], ["Tanzania", 1, 0], ["Timor-Leste", 1, 0], ["Togo", 1, 0], ["Tonga", 1, 0], ["Tuvalu", 1, 0],
        ["United Arab Emirates", 1, 0], ["Afghanistan", 0, 0], ["Algeria", 0, 0], ["Andorra", 0, 0], ["Angola", 0, 0], ["Australia", 0, 0], ["Austria", 0, 0], ["Belgium", 0, 0], ["Belize", 0, 0], ["Bhutan", 0, 0], ["Bulgaria", 0, 0], ["Burkina Faso", 0, 0], ["Burundi", 0, 0], ["Cameroon", 0, 0], ["Canada", 0, 0], ["Central African Republic", 0, 0], ["Chad", 0, 0], ["China", 0, 0], ["Republic of the Congo", 0, 0], ["Democratic Republic of the Congo", 0, 0], ["Croatia", 0, 0],
        ["Cyprus", 0, 0], ["Czech Republic", 0, 0], ["Denmark", 0, 0],
        ["Equatorial Guinea", 0, 0], ["Eritrea", 0, 0], ["Estonia", 0, 0], ["Finland", 0, 0], ["France", 0, 0], ["Gambia", 0, 0], ["Germany", 0, 0], ["Ghana", 0, 0],
        ["Greece", 0, 0], ["Guinea", 0, 0], ["Hungary", 0, 0], ["Iceland", 0, 0], ["Iraq", 0, 0], ["Ireland", 0, 0], ["Italy", 0, 0], ["Japan", 0, 0], ["Kiribati", 0, 0], ["North Korea", 0, 0], ["Kuwait", 0, 0], ["Latvia", 0, 0],
        ["Liberia", 0, 0], ["Libya", 0, 0], ["Liechtenstein", 0, 0], ["Lithuania", 0, 0], ["Luxembourg", 0, 0], ["Malawi", 0, 0], ["Mali", 0, 0], ["Malta", 0, 0], ["Monaco", 0, 0], ["Netherlands", 0, 0], ["New Zealand", 0, 0], ["Niger", 0, 0],
        ["Nigeria", 0, 0], ["Norway", 0, 0], ["Pakistan", 0, 0], ["Papua New Guinea", 0, 0], ["Poland", 0, 0], ["Portugal", 0, 0], ["Romania", 0, 0], ["San Marino", 0, 0], ["Saudi Arabia", 0, 0], ["Sierra Leone", 0, 0], ["Slovakia", 0, 0],
        ["Slovenia", 0, 0], ["Solomon Islands", 0, 0], ["South Sudan", 0, 0], ["Spain", 0, 0], ["Sudan", 0, 0], ["Suriname", 0, 0], ["Sweden", 0, 0], ["Switzerland", 0, 0], ["Syria", 0, 0], ["Turkmenistan", 0, 0], ["United Kingdom", 0, 0],
        ["United States", 0, 0], ["Vatican City", 0, 0], ["Yemen", 0, 0]];

    let storageValues;

    google.charts.load('current', {
        'packages': ['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyA-96_5-STM5Db3pdLcKRpJZg4tAXRHZYw'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);


    function drawRegionsMap() {

        storageValues = JSON.parse(localStorage.getItem('data'));
        if (!storageValues) {
            storageValues = defaultValues;
        }
        let data = google.visualization.arrayToDataTable(storageValues);

        let options = {};

        chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);


        function selectHandler() {
            let input = document.getElementById('input');
            let newCost = parseInt(input.value);
            let countryName = data.getValue(chart.getSelection()[0].row, 0);
            let visaNotRequired = data.getValue(chart.getSelection()[0].row, 1);

            data.addRow([countryName, visaNotRequired, newCost]);
            storageValues.push([countryName, visaNotRequired, newCost]);
            chart.draw(data, options);
            localStorage.setItem('data', JSON.stringify(storageValues));
        }

        document.getElementById('cost').addEventListener('click', () => {
            let newArr = storageValues.map(value => {
                return [value[0], value[2]]
            });
            let newOptions = {
                colorAxis: {
                    colors: ['green', 'red']
                }
            };
            let data = google.visualization.arrayToDataTable(newArr);
            chart.draw(data, newOptions);
        });

        document.getElementById('visa').addEventListener('click', () => {
            let data = google.visualization.arrayToDataTable(storageValues);
            chart.draw(data, options);
        });

        google.visualization.events.addListener(chart, 'select', selectHandler);
    }
}

document.addEventListener("DOMContentLoaded", ready);