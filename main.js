var messagesContainer = $('.right-messages-container .right-messages');

$(document).ready(function() {
	$('.new-message-inputs').keypress(function(e) {
		if (e.which == 13) {
			var thisInput = $(this),
			newMessage = thisInput.val(),
			now = new Date();

			if (newMessage) {
				//now i can append to the messages
				var messageTemplate = $('.template .message.sent').clone();
				messageTemplate.children('.message-text').text(newMessage);
				messageTemplate.children('.message-time').text(now.getHours() + ':' + now.getMinutes());

				messagesContainer.append(messageTemplate);

				var clearTemplate = $('.template .cl-t').clone();
				messagesContainer.append(clearTemplate);

				thisInput.val('');
			}
		}
	});
});
