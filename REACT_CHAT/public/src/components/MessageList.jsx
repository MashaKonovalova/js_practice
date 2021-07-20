/** @jsx React.DOM */
'use strict';
var MessagesList = React.createClass({
    getInitialState: function(){
        return{
            messages:['sample']
        }
    },
    addMessage: function(message){
        var messages = this.state.messages;
        var container = this.refs.messageContainer.getDOMNode();
        messages.push(message);
        this.setState({
            messages: messages
        })
    },
    render: function(){
        //var messages;
        
        //messages = this.state.messages.map(function(msg){
           // return (
            //    <ChatMessage message={msg}></ChatMessage>
           // )
       // });
       // if(!messages.length){
        //   messages =<div className="chat-messages-empty">No messages yet</div>
       // }
       console.log(this.state);
        return(
            <div ref="msgContainer" className="col-xs-9 col-md-8 col-lg-8">
                {messages}
            </div>
        )
    }
})