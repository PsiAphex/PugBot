const states = require('../../structures/Game').states;

const { MessageEmbed } = require('discord.js');
const run = async(message) => {
    const pickups = await message.client.pickups.fetchChannel(message.channel.id);
    const embed = new MessageEmbed()
        .setTitle('Currently active pickups')
        .setColor('GREEN');
    pickups.forEach(x => {
        let field = '';
        x.gameIDs.forEach(id => {
            const game = x.games[id];
            if (game.state == states[0])
                field += `ID: ${game.id}\nState: *IN QUEUE*\nPlayers: **${game.size}/${game.maxSize}**`;
            else
                field += `ID: ${game.id}\nState: IN PROGRESS...`;
        });
        embed.addField(x.name, field || 'No match in progress');
    });
    message.embed(embed);
};


module.exports = {
    name: 'who',
    aliases: [],
    run,
};
