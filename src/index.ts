import DiscordJS from 'discord.js';
import dotenv from 'dotenv';
import { keepAlive } from './server';
dotenv.config();
const TOKEN = process.env.TOKEN;

const client = new DiscordJS.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_PRESENCES'] });
const coucilList = ['500709006021623809', '447491395175972865', '344108529335926785', '562956997482250240', '314811526521290753', '627242960068804628'];

// @ts-ignore
function addRoles(roles, member)  {
    for (const role of roles) {
        if (!role) return;
        member.roles.add(role).catch(console.error);
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
})

client.on('guildMemberAdd', member => {
    console.log(`${member.user.tag} has joined ${member.guild.name}, id: ${member.id}`);
    if (coucilList.includes(member.id)) {
        var roleList = [member.guild.roles.cache.get('671061511648706571'),
                        member.guild.roles.cache.get('802612050005196891')];
        addRoles(roleList, member);
    }
    if (member.id === '322868437745664004') { // just for tino
        var roleList = [member.guild.roles.cache.get('776164671161892905'),
                        member.guild.roles.cache.get('754028599656579162'),
                        member.guild.roles.cache.get('802612050005196891')];
        addRoles(roleList, member);
    }
    if (member.id === '604782316513919046') { // just for nate
        var roleList = [member.guild.roles.cache.get('776164671161892905'),
                        member.guild.roles.cache.get('802612050005196891')];
        addRoles(roleList, member);
    }
    if (member.id === '314811526521290753') { // just for ted
        var roleList = [member.guild.roles.cache.get('635819127012851739')];
        addRoles(roleList, member);
    }
    if (member.id === '622845352050950164') { // just for mikail
        var roleList = [member.guild.roles.cache.get('776164671161892905'), 
                        member.guild.roles.cache.get('802612050005196891'), 
                        member.guild.roles.cache.get('656162102372728862')];
        addRoles(roleList, member);
    }
});

keepAlive();
client.login(TOKEN);