var child; // This global child variable is used to store the browser window object.

// This function creates the content of the disclaimer with styles added inline.
function disclaimerContent() {
  // Below is the disclaimer statement written in the window opened using open method.
  child.document.writeln("" +
    "<html lang='en'>\n" +
    "   <head>\n" +
    "      <title>Disclaimer</title>\n" +
    "   </head>\n" +
    "   <body style='display: flex; justify-content: center; align-items: center; flex-direction: column;'>\n" +
    "      <p style='color: #6c757d;'><em>\"this website is developed as an educational project\". If any copyrighted\n" +
    "        materials are included in accordance to the multimedia fair use guidelines, a notice should be added and states\n" +
    "        that \"certain materials are included under the fair use exemption of the U.S. Copyright Law and have been\n" +
    "        prepared according to the multimedia fair use guidelines and are restricted from further use\".</em></p>\n" +
    "      <button id='close-btn' style='text-align: center; " +
    "          background-color: #DBA800; color: #FFFFFF; font-size: 18px; " +
    "          font-weight: 400; border-radius: 25px; width: 20%; padding: 10px 28px; " +
    "          border: 1px solid;' type='button'>Close</button>\n" +
    "      <script>\n" +
    "         document.getElementById('close-btn').addEventListener('click', function() {\n" +
    "            window.close();\n" +
    "         });\n" +
    "      </script>\n" +
    "   </body>\n" +
    "</html>");
}

// This function open a browser window that shows the disclaimer.
function openWindow() {
  // Get the View Disclaimer button by ID and listen for a click and then execute the function to open the window
  document.getElementById("disclaimer-btn").addEventListener("click", function() {
    child = window.open("", "", "width=600, height=400");
    disclaimerContent(); // Calling the disclaimer content to be displayed in the window
  });
}

// This event listener loads the open window function on page load.
window.addEventListener("load", openWindow, false);
