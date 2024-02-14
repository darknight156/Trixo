export default class TrixoConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "MTEzNzc5NDcwMzExMTIzNzczMw.GoaHTy.wttZeThEGVV0glv8EMHtIRpgq1Yiih1fIw-_qI"
        this.prefix = "$";
        this.nodes = [
            {
                name: `Oras`,
                url: `78.46.65.243:5366`,
                auth: `TrixoBack`,
                secure: false,
            },
        ];
        this.voteApi =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMzc3OTQ3MDMxMTEyMzc3MzMiLCJib3QiOnRydWUsImlhdCI6MTcwNjM1NzE2NX0.5F_7vZxuTgVv0o7AqrCx8dTbswhzAkj9XSZjaXoxDn4";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1200778682655047731/MMABPDrZTYuFVgBERF6rKsn_BJ5yEV2ql3pJ_N4dVqeigMCZCisqCRWEg6u95uL6egin",
            guildDelete: "https://discord.com/api/webhooks/1200778682655047731/MMABPDrZTYuFVgBERF6rKsn_BJ5yEV2ql3pJ_N4dVqeigMCZCisqCRWEg6u95uL6egin",
            Cmds: "https://discord.com/api/webhooks/1200778545182548008/xshxZOsh1D7umZcAG3lviCh0QpHO7lwhyUTBfHmghfx8ETcSwBU8Ta-yXv-CdC32lQP-",
        };
        this.server = "https://discord.gg/bakchodi";
        this.botinvite = `https://discord.com/api/oauth2/authorize?client_id=1137794703111237733&permissions=19379496208598&scope=bot`;
        this.spotiId = "ada2f0339dd340df9aa14c76f33f84f3";
        this.spotiSecret = "9fd6d604c0f343b4a998839f43ef88c7";
        this.owners = ["1130505804009721886", "1126349436444999751", "1057674644905279498", "1043412897247789058", "1188178871049265282",
"1084506885568352367"];
        this.color = "#0195fe";
        this.supportId = "1129808566967083151";
        this.spotiNodes = [
            {
                id: `Oras`,
                host: `78.46.65.243`,
                port: 5366,
                password: `TrixoBack`,
                secure: false,
            },
        ];
        this.voteUrl = "https://top.gg/bot/1137794703111237733/vote";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1183400627875893348/1191395121133002752/Screenshot_2023-11-24-17-27-19-53_dba69a5e82e939c3ddef13f99a115ca3.jpg?ex=65a5482b&is=6592d32b&hm=a18f222cf78ea7ee1ba56b7ce987fdfe82d9471e3e9f6655ebec44d5acae0da6&=&format=webp&width=1155&height=515";
    }
}
//# sourceMappingURL=Config.js.map