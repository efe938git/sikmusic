const Discord = require('discord.js')
const client = new Discord.Client()
const ytdl = require ("ytdl-core");
const prefix = "+";

var list = [];

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '+play pregunta') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./pregunta.mp3');
      } else {
        message.reply('Tu dois etre dans un salon vocale!');
      }
    }
  });

  client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '+play blk intro') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./blkintro.mp3');
      } else {
        message.reply('Tu dois etre dans un salon vocale!');
      }
    }
  });
  client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '+play hope') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./hope.mp3');
      } else {
        message.reply('Tu dois etre dans un salon vocale!');
      }
    }
  });
  client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '+play parado') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./parado.mp3');
      } else {
        message.reply('Tu dois etre dans un salon vocale!');
      }
    }
  }),

client.on('message', function (message) {
    if (message.content === '+salut') {
        message.channel.send('salut à toi')
    }
});
client.on('message', function (message) {
    if (message.content === '+ca va') {
        message.channel.send('ca va tres bien et toi')
    }
});
client.on('message', function (message) {
    if (message.content === '+moi aussi je vais bien') {
        message.channel.send('ok')
    }
});
client.on('message', function (message) {
    if (message.content === '+epic') {
        message.channel.send('RMZ-93')
    }
});
client.on('message', function (message) {
    if (message.content === '+youtube') {
        message.channel.send('https://www.youtube.com/channel/UCAJvEXVgt3HwcYnJBzNh0Sw')
    }
});
client.on('message', function (message) {
    if (message.content === '+tic') {
        message.channel.send('tac')
        message.channel.send('boom')
    }
});

client.login('ODcyOTAxOTk3NzM1NTg3ODkx.YQwnVQ.NnJ_w6LbclkGsHOetxz8gG-Lu8w')

client.on("ready", async () =>{
    console.log("le bot est en route")
    client.user.setActivity ("deltazz me dev", {type: 'WATCHING'} );
});

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '+ma pdp') {
      // Send the user's avatar URL
      message.channel.send(message.author.displayAvatarURL());
    }
  });

  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
    
    // If the message content starts with "!kick"
    if (message.content.startsWith(prefix + "kick")) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`a kick ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('na pas été kick');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("cette n'est pas sur le serv!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("Tu n'as pas mentionner la personne a kick!");
      }
    }
  });
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('+ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`a été banni ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('na pas été banni');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("Cette personne n'est pas sur le serv!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("Tu n'as pas mentionner la personne a ban!");
      }
    }
  });

  client.on("message", message => {
    if(message.content.startsWith(prefix + "play")){

       if(message.member.voice.channel){
         let args = message.content.split(" ")
         
         if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
           message.reply("lien de la vidéo invalide.");
         } 
         else {
           if(list.length > 0){
             list.push(args[1]);
             message.reply("Vidéo ajouter à la liste.");
           }
           else {
             list.push(args[1]);
             message.reply("Vidéo ajouter à la liste.");
          

             message.member.voice.channel.join().then(connection => {
              playMusic(connection);
              
              connection.on("disconnect", () => {
                list = []; 
              });
              
             }).catch(err => {
               message.reply("Erreur lors de la connexion : " + err);
             });
           }
         }
       }
    }
  });

  function playMusic(connection){
    let dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio"}));

    dispatcher.on("finish", () => {
      list.shift();
      dispatcher.destroy();

      if(list.length > 0){
        playMusic(connection);
      }
      else {
        connection.disconnect();
      }
    });

    dispatcher.on("error", err => {
      console.log("erreur de dispatcher : " + err);
      dispatcher.destroy();
      connection.disconnect();
      dispatcher.pause();
    })
  };
