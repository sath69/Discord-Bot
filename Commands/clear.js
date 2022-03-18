//clear command

module.exports = {
	name: 'clear',
	description: 'Clears a given message.',
	async execute(client, message, args, Discord){
		if(message.member.permissions.has('ADMINISTRATOR')){
			if(!args[0]) return message.reply('Please enter the amount of messages needed to clear!');
			if(isNaN(args[0])) return message.reply('Please enter an appropriate integer to clear!');
			if(args[0] >100) return message.reply('You cannot clear more than `100` messages!');
			if(args[0] <1) return message.reply('You must clear at least `1` message!');

			await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
				message.channel.bulkDelete(messages)
				message.channel.send(`${message.author} successfully cleared ${args} messages!`)
			})
		}
	}
}