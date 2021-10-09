const { Command } = require("visa2discord");

module.exports = class ExampleCommand extends Command {
  constructor(client) {
    super(client, {
      name: "name of the command",
      description: "This is a description",
      cooldown: 5,
      command: {
        enabled: true, //booleen
        usage: "",
        category: "",
        botPermissions: [], //perms required by bot to run the cmd
        minArgsCount: 0, //integer
        guildOwnerOnly: false, //cmd will only work for guild owner
        nsfw: false, //if cmd is nsfw
        userPermissions: [], //perms required by user to run the cmd
      },
      slashCommand: {
        enabled: true, //booleen
        options: [
          {
            name: "name of the option",
            description: "This is a description", 
            type: "", // USER | STRING | CHANNEL | ROLE | INTEGER
            required: false, //booleen
          },
        ],
      },
      contextMenu: {
        enabled: true, //booleen
        type: "", // USER | MESSAGE
        userPermissions: []
      },
    });
  }


  async messageRun(message, args) {
//code
  }

  async interactionRun(interaction, options) {
//code
  }

  async contextRun(interaction) {
// code
  }
};
