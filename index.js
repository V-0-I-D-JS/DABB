function wopen() {
var x = window.open('');
x.document.write('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>god tab</title></head><body> <style type="text/css"> body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; } </style> <iframe src="'+url+'" style="width:100vw;height:100vh;"></iframe></body></html>');};
function copy() {
  const starter = "data:text/html;base64,";
  const b64site = btoa(`<html>  <head>    <title>God button</title>  </head>  <body>    <script>function wopen() {var x = window.open('');x.document.write('<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>god tab</title></head><body> <style type="text/css"> body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; } </style> <iframe src="` + url + `" style="width:100vw;height:100vh;"></iframe></body></html>');};</script>    <style type="text/css"> body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; } @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');.btn {  width: 100%;  height: 100%;  background-color: darkred;  display: flex;  align-items: center;  justify-content: center;  transition: 0.2s;}.btn:hover {  background-color: red;}a {  font-size: 50px;  color: white;  text-decoration: none;  font-family: 'Poppins', sans-serif;}a:hover {  font-size: 60px;}.minior-a {  font-size: 10px;  color: white;  text-decoration: none;  font-family: 'Poppins', sans-serif;}</style>    <div>      <a href="javascript:wopen()">        <div class="btn">Open&nbsp;&nbsp;&nbsp;` + url + `</div>      </a>    </div>      </body></html>
`);
  const link = starter + b64site;
  navigator.clipboard.writeText(link);
}
