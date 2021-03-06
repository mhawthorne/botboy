var sys = require('sys'),
    MongoBot = require('./mongobot'),
    MysqlBot = require('./mysqlbot');

function Persistence(properties) {
    
    var persistBots = [];
    var self = this;
    
    if (properties.mysql) {
        persistBots.push(new MysqlBot().init(properties, true));
    }
    
    if (properties.mongodb) {
        persistBots.push(new MongoBot().init(properties, (properties.mysql == null)));
    }
    
    this.isActive = function() {
        return (persistBots.length > 0);
    };
    
    // Save a message said by nick
    this.saveMessage = function(nick, message) {
        persistBots.forEach(function(b) {
            b.saveMessage(nick, message);
        });
    };
    
    // Makes bot say a random quote
    this.getRandom = function(bot) {
        persistBots.forEach(function(b) {
            b.getRandom(bot);
        });
    };
    
    // Makes bot say a random quote by nick
    this.getQuote = function(nick, bot) {
        persistBots.forEach(function(b) {
            b.getQuote(nick, bot);
        });
    };
    
    // Makes bot say the message with the id msgId
    this.getMessage = function(msgId, bot) {
        persistBots.forEach(function(b) {
            b.getMessage(msgId, bot);
        });
    };
    
    // Makes bot say a random message that matches str
    this.matchMessage = function(str, bot) {
        persistBots.forEach(function(b) {
            b.matchMessage(str, bot);
        });
    };
    
    // Makes bot say a random message said by nick that matches str
    this.matchMessageForNick = function(nick, str, bot) {
        persistBots.forEach(function(b) {
            b.matchMessageForNick(nick, str, bot);
        });
    };
}

module.exports = Persistence;

