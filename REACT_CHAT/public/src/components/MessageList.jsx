/** @jsx React.DOM */
'use strict';
var MessagesList = React.createClass({
    getInitialState: function(){
        return{
            messages:[]
        }
    },
    addMessage: function(message){
        var messages = this.state.messages;
        var container = this.refs.msgContainer.getDOMNode();
        messages.push(message);
        this.setState({
            messages: messages
        })
    },

    componentDidiUpdate: function(){ //!!! componentDidUpdate???
        var container = this.refs.msgContainer.getDOMNode();
        container.scrollTop = container.scrollHeight;
    },
    render: function(){
        var messages;
        
        messages = this.state.messages.map(function(msg){
            return (
                <ChatMessage message={msg}></ChatMessage>
            )
        });
        if(!messages.length){
           messages = <div> 
               <div className="chat-messages-empty">No messages yet</div>
               </div>
        }
        return(
            <div ref="msgContainer" className="chat-messages col-xs-9 col-md-8 col-lg-8">
                {messages}
            </div>
        )
    }
})