'use strict';

function ChatEmitter() {
  EventEmitter.call(this);
  this._peers = {};
}

ChatEmitter.prototype = Object.create(EventEmitter.prototype);
ChatEmitter.prototype.setUsername = function(username){
  this._username = username;
};
ChatEmitter.prototype.getUsername =function(){
  return this._username;
};

ChatEmitter.prototype.connect = function(username){
  var self = this;
  this.setUsername();
  this.socket = io();
  this.socket.on('connect', function(){
    self.socket.on(Actions.USER_CONNECTED, function(userId){

    });
    self.socket.on(Actions.USER_DISCONNECTED, function(userId){
      
    });
  })
}