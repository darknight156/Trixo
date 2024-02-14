import OrasEvent from "../abstract/OrasEvent.js";
export default class Ready extends OrasEvent {
    constructor(client) {
        super(client);
        this.name = "ready";
        this.run = async () => {
            this.client.logger.ready(`${this.client.user.username} is Online!`);
            const activities = [
                {
                    content: `${this.client.config.prefix}help | @Trixo`,
                    type: 0,
                    status: `online`,
                },
                {
                    content: `${this.client.config.prefix}help | @Trixo`,
                    type: 2,
                    status: `online`,
                },
                {
                    content: `${this.client.config.prefix}help | @Trixo`,
                    type: 3,
                    status: `online`,
                },
            ];
            setInterval(() => {
                let activity = Math.floor(Math.random() * activities.length);
                this.client.user.setPresence({
                    activities: [
                        {
                            name: activities[activity].content,
                            type: activities[activity].type,
                        },
                    ],
                    status: activities[activity].status,
                });
            }, 5000);
        };
    }
}
//# sourceMappingURL=Ready.js.map