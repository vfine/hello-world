<div class="link-textbox">
  <input type="text" value="https://example.com" id="link-textbox-input">
  <span class="tooltip">Copy to clipboard</span>
  <i class="fas fa-copy"></i>
</div>


.link-textbox {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 5px;
}

.link-textbox input[type="text"] {
  border: none;
  background-color: transparent;
  flex: 1;
  margin-right: 5px;
}

.link-textbox .tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  white-space: nowrap;
}

.link-textbox .fa-copy {
  cursor: pointer;
}

.link-textbox:hover .tooltip {
  display: block;
}
// Initialize Tooltip
$('.link-textbox').hover(function(){
  // Hover over code
  var title = $(this).attr('data-original-title');
  $(this).data('tipText', title).removeAttr('title');
  $('<p class="tooltip"></p>')
  .text(title)
  .appendTo('body')
  .fadeIn('slow');
}, function() {
  // Hover out code
  $(this).attr('title', $(this).data('tipText'));
  $('.tooltip').remove();
}).mousemove(function(e) {
  var mousex = e.pageX + 20; //Get X coordinates
  var mousey = e.pageY + 10; //Get Y coordinates
  $('.tooltip')
  .css({ top: mousey, left: mousex });
});

// Copy to Clipboard
$('.link-textbox .fa-copy').click(function() {
  var input = $('#link-textbox-input');
  input.select();
  document.execCommand('copy');
});
// Initialize Tooltip
$('.link-textbox').hover(function(){
  // Hover over code
  var title = $(this).attr('data-original-title');
  $(this).data('tipText', title).removeAttr('title');
  $('<p class="tooltip"></p>')
  .text(title)
  .appendTo('body')
  .fadeIn('slow');
}, function() {
  // Hover out code
  $(this).attr('title', $(this).data('tipText'));
  $('.tooltip').remove();
}).mousemove(function(e) {
  var mousex = e.pageX + 20; //Get X coordinates
  var mousey = e.pageY + 10; //Get Y coordinates
  $('.tooltip')
  .css({ top: mousey, left: mousex });
});

// Copy to Clipboard
$('.link-textbox .fa-copy').click(function() {
  var input = $('#link-textbox-input');
  input.select();
  document.execCommand('copy');
});

// Fill link-textbox with current location
$('#link-textbox-input').val(window.location.href);
