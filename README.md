# dmsDialog
Javascript alert/confirm dialog replacement

# Instructions
Load the script into your HTML document:
    <script type="text/javascript" src="dmsDialog.js"></script>

To present an alert dialog:
    dmsDialog.alert("Message!");

To present a confirm dialog:
    dmsDialog.confirm("Are you sure?", function(){
      // This function is called if the user presses OK
    });

Instead of a single string for a message, you may pass an array.
Elements will be wrapped in <p> tags.
