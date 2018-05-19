import React from "react";

// function TestSelection () {
//   if (window.getSelection) {  // all browsers, except IE before version 9
//       var selectionRange = window.getSelection ();                                        
//       alert ("The text content of the selection:\n" + selectionRange.toString ());
//   } 
//   else {
//       if (document.selection.type == 'None') {
//           alert ("No content is selected, or the selected content is not available!");
//       }
//       else {
//           var textRange = document.selection.createRange ();
//           alert ("The text content of the selection:\n" + textRange.text);
//       }
//   }
// }



const Noteit = props => (
  <div>
    <embed id="iframez" src="https://www.wikipedia.org/" />
    <script>
    var t = '';
function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection()};

    document.getElementById('input').value = t;


document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
      </script>

    <div id="options-box">
      <input checked="checked" name="highlight" type="radio" value="true" />Highlighter<br/>
      <input checked="checked" name="highlight" type="radio" value="true" />UnHighlighter
      <br />
      <button>Save</button>
    </div>
  </div>
);

export default Noteit;
