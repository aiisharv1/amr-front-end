var child; // This global child variable is used to store the browser window object.
// Below is the citations array to track all citations
var citations =
  [
    "Franco, Debartolo. (2023). cadillac,escalade,wallpaper. Unsplash. https://unsplash.com/photos/a-black-suv-parked-in-front-of-a-stone-building-8kAmGDOg_xI",
    "Sven, D. (2018). Ford in to the wild. Unsplash. https://unsplash.com/photos/parked-white-ford-explorer-suv-a4S6KUuLeoM",
    "Hyundai Motor Group. (2024). The Genesis GV80 Coupe speeding through a road on a cloudy day. Unsplash. https://unsplash.com/photos/a-red-car-driving-down-a-road-under-a-cloudy-sky-btGJfB5Oyw0",
    "Ezra, McKenna. (2024). The brand-new Hummer EV SUV offroading in Utah. Unsplash. https://unsplash.com/photos/a-silver-truck-parked-on-a-dirt-road-6iDLl3Y3Noc",
    "Václav, Pechar. (2023). Mercedes. Unsplash. https://unsplash.com/photos/a-black-mercedes-benz-benz-benz-benz-benz-benz-benz-benz-benz-benz-benz-benz-benz-tA5uqFghXuw",
    "Josh, M. (2023). Black Jeep drifting in snow. Unsplash. https://unsplash.com/photos/a-black-jeep-driving-down-a-snow-covered-road-5cJ0UIo73wc",
    "Hunter, Newton. (2018). Porsche. Unsplash. https://unsplash.com/photos/gray-sedan-BwaUJC81i6M",
    "Freddy, G. (2023). 2023 Lexus GX 460 Luxury. Unsplash. https://unsplash.com/photos/a-black-suv-parked-on-the-side-of-the-road--e3Qdeqh_E4",
    "Anemone123. (2017). Team spirit, Teamwork, Community image. Pixabay. https://pixabay.com/photos/team-spirit-teamwork-community-2447163/",
    "Startup Stock Photos. (2015). Entrepreneur. Pixabay. https://pixabay.com/photos/entrepreneur-start-up-man-planning-593358/",
    "Melan Cholia Photography. (2018). Man, Coffee, Outdoors image. Pixabay. https://pixabay.com/photos/man-coffee-outdoors-lake-lakeside-3803551/",
    "Jonas Svidras. (2018). Woman, Model, Pose image. Pixabay. https://pixabay.com/photos/woman-model-pose-style-curly-hair-3116587/",
    "Pexels. (2016). Adult, Man, Beanie image. Pixabay. https://pixabay.com/photos/adult-man-beanie-beard-cap-casual-1867471/",
    "Eyosias G. (November 29, 2022). Model Y headlight. Unsplash. https://unsplash.com/photos/a-close-up-of-a-car-h4hC1_hUye8",
    "Richard R. (February 11, 2023). limousine. Unsplash. https://unsplash.com/photos/a-white-limo-parked-on-the-side-of-the-road-FZ5MkHkeyKM",
    "Renaldo Kodra. (January 18, 2022). BMW. Unsplash. https://unsplash.com/photos/a-black-car-is-parked-in-a-dark-room-l6gh4sL3_P0"
  ];
// This function creates the content of the citations with styles added inline.
function citationsContent() {
  // Below is the citations written in the window opened using open method.
  child.document.writeln("" +
    "<html lang='en'>\n" +
    "   <head>\n" +
    "      <title>Citations</title>\n" +
    "   </head>\n" +
    "   <body style='display: flex; justify-content: center; align-items: center; flex-direction: column;'>\n" +
    "      <h1>Citations</h1>\n"
  );

  // Using For in loop to write out the citations from the citations array above
  for (const key in citations) {
    child.document.writeln("<p style='color: #6c757d;'>"+citations[key]+"</p>\n");
  }

  child.document.writeln("" +
    "    <button id='close-btn' style='text-align: center; " +
    "          background-color: #DBA800; color: #FFFFFF; font-size: 18px; " +
    "          font-weight: 400; border-radius: 25px; width: 20%; padding: 10px 28px; " +
    "          border: 1px solid;' type='button'>Close</button>\n" +
    "      <script>\n" +
    "         document.getElementById('close-btn').addEventListener('click', function() {\n" +
    "            window.close();\n" +
    "         });\n" +
    "      </script>\n" +
    "   </body>\n" +
    "</html>"
  );
}

// This function open a browser window that shows the citations.
function openCitationsWindow() {
  child = window.open("", "", "width=600, height=400");
  citationsContent(); // Calling the citations content to be displayed in the window
}
