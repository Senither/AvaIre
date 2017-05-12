module.exports = {
    'input.unknown': {
        intent: 'What?',
        handler: require('./intents/Unknown')
    },
    'request.online-players': {
        intent: 'How many are online?',
        handler: require('./intents/RequestOnlinePlayers')
    },
    'request.cat': {
        intent: 'Random cat',
        handler: require('./intents/RequestCat')
    },
    'command.prefix': {
        intent: 'Command Prefix',
        handler: require('./intents/CommandPrefix')
    }
};
