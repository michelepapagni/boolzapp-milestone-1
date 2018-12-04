var clearDiv = '<div class="cl-t"></div>',
messageSentTagOpen = '<div class="message sent">',
messageReceivedTagOpen = '<div class="message received">',
messageTagClose = '</div>',
spanTimeOpen = '<span class="message-time">',
spanTimeClose = '</span>',
messageOptionsButton = '<i class="fa fa-chevron-down f-right message-options"></i>',
optionsPanel = `<div class="message-options-panel">
	<div class="message-info">Info messaggio</div>
	<div class="message-destroy">Cancella messaggio</div>
</div>`,
contactsFilter = $('#contacts-filter'),
contactsContainer = $('.contacts'),
messagesContainer = $('.right-messages-container');

$(document).ready(function() {

	$('.new-message-inputs').keypress(function(e) {
		if (e.which == 13) {
			var thisInput = $(this),
			newMessage = thisInput.val(),
			now = new Date();

			if (newMessage) {
				//now i can append to the messages
				var footerCnt = thisInput.parent(),
				rightContainer = footerCnt.parent()
				messagesContainer = rightContainer.children('.right-messages-container').children('.right-messages.active');

				messagesContainer.append(
					messageSentTagOpen + newMessage + messageOptionsButton + spanTimeOpen + now.getHours() + ':' + now.getMinutes() + spanTimeClose + optionsPanel + messageTagClose + clearDiv
				);

				thisInput.val('');
			}
		}
	});

});
