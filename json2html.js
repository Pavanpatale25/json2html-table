// json2html.js
export default function json2html(data) {
  // Extract headers from the data array
  const headers = ["Name", "Age", "Gender"];

  // Begin building the HTML table as a string
  let html = `<table data-user="pavanpatale25@gmail.com">\n`;
  html += "  <thead>\n    <tr>";
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr>\n  </thead>\n";

  // Create table body
  html += "  <tbody>\n";
  data.forEach(row => {
    html += "    <tr>";
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
    });
    html += "</tr>\n";
  });
  html += "  </tbody>\n</table>";

  return html;
}
