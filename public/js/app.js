var apiKey = "46135532";
var sessionId = "1_MX40NjEzNTUzMn5-MTUyODUyNjc3OTQ3MH5UaTBxZGdhVnEvQWpXam1yeXRYbDN0aGF-fg";
var token = "T1==cGFydG5lcl9pZD00NjEzNTUzMiZzaWc9ZGIxYzJjZjUwOWU0MDgyYjgxNzU2MGQwMGJlNGM2NTNjMTA5NThiYjpzZXNzaW9uX2lkPTFfTVg0ME5qRXpOVFV6TW41LU1UVXlPRFV5TmpjM09UUTNNSDVVYVRCeFpHZGhWbkV2UVdwWGFtMXllWFJZYkROMGFHRi1mZyZjcmVhdGVfdGltZT0xNTI4NTI3MzQyJm5vbmNlPTAuNzQ4MDk3MzYzODM0NjQ4MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI5MTMyMTQxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
var secret = "82bdf74ab6cd49e1d8e00bd64de7567d90a8316b";

// (optional) add server code here
initializeSession();

// Create publisher

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });

  // Create Subscriber

  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

}
