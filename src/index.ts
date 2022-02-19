import DiscordJS from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
const TOKEN = process.env.TOKEN;

const client = new DiscordJS.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_PRESENCES'] });
const coucilList = ['500709006021623809', '447491395175972865', '344108529335926785', '562956997482250240', '314811526521290753', '627242960068804628'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
})

client.on('guildMemberAdd', member => {
    console.log(`${member.user.tag} has joined ${member.guild.name}, id: ${member.id}`);
    if (coucilList.includes(member.id)) {
        var role = member.guild.roles.cache.get('671061511648706571');
        var role2 = member.guild.roles.cache.get('802612050005196891')
        if (!role) return;
        if (!role2) return;
        member.roles.add(role).catch(console.error);
        member.roles.add(role2).catch(console.error);
    }
    if (member.id === '322868437745664004') { // just for tino
        var role = member.guild.roles.cache.get('776164671161892905');
        var role2 = member.guild.roles.cache.get('754028599656579162');
        var role3 = member.guild.roles.cache.get('802612050005196891');
        if (!role) return;
        if (!role2) return;
        if (!role3) return;
        member.roles.add(role).catch(console.error);
        member.roles.add(role2).catch(console.error);
        member.roles.add(role3).catch(console.error);
    }
    if (member.id === '604782316513919046') { // just for nate
        var role = member.guild.roles.cache.get('776164671161892905');
        var role2 = member.guild.roles.cache.get('802612050005196891')
        if (!role) return;
        if (!role2) return;
        member.roles.add(role).catch(console.error);
        member.roles.add(role2).catch(console.error);
    }
    if (member.id === '314811526521290753') { // just for ted
        var role = member.guild.roles.cache.get('635819127012851739');
        if (!role) return;
        member.roles.add(role).catch(console.error);
    }
});

client.login(TOKEN);