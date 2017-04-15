/** @ignore */
const Command = require('./../Command');
/** @ignore */
const Module = require('./utils/ChannelModule');

/**
 * Welcome Command, allows server managers to toggle the
 * welcome module on or off for any given channel.
 *
 * @extends {Command}
 */
class WelcomeCommand extends Command {

    /**
     * Sets up the command by providing the prefix, command trigger, any
     * aliases the command might have and additional options that
     * might be usfull for the abstract command class.
     */
    constructor() {
        super('.', 'welcome', ['wel'], {
            allowDM: false,
            description: 'Toggles the welcome module on or off for the current channel.',
            middleware: [
                'require:general.manage_server',
                'throttle.guild:1,5'
            ]
        });
    }

    /**
     * Executes the given command.
     *
     * @param  {IUser}     sender   The Discordie user object that ran the command.
     * @param  {IMessage}  message  The Discordie message object that triggered the command.
     * @param  {Array}     args     The arguments that was parsed to the command.
     * @return {mixed}
     */
    onCommand(sender, message, args) {
        return Module.toggle(message, 'welcome', 'Welcome');
    }
}

module.exports = WelcomeCommand;
