/** @jsx React.DOM*/
'use strict';
var ChatMessage = React.createClass({
    render: function(){
        var message = this.props.message;
        var hours = message.date;
        var minutes = message.date;

        return (
            <div className="chat-message">
                <div className="chat-message-time"></div>
                <div className="chat-message-author">{message.author}:  </div>
                <div className="chat-message-content">{message.content}</div>
            </div>
        )
    }
})