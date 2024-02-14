export default class TrixoEmoji extends Object {
  constructor(client) {
      super();
      this.tick = "<:tick_trixo:1191728811096674404>";
      this.cross = "<:cross_trixo:1191728814204649552>";
      this.playing = "<:playing_flora:1175744376647974982>";
      this.exclamation = "<:exe_trixo:1191728188095737866>";
      this.queue = "<:queue:1190884592425635981>";
      this.info = "<:info_trixo:1191724035663478824> ";
      this.arrow = "<:Arrow:1203205982650507274>";
      this.defSearch = "<:youtube:1175853535343165550>";
      this.premium = "<a:premium:1175845057618792510>";
      this.invite = "<:invite_trixo:1191723223365189633>";
      this.support = "<:hsupp_trixo:1191725502117990460>";
      this.spotiSearch = "<:Spotify:1175478136486494369>";
      this.deezSearch = "<:Deezer_avon:1065634451603861545>";
      this.vote = "<:upvote:1175846777904181414>";
      this.soundSearch = "<:Soundcloud:1175479201386745868>";
      this.badges = {
          named: "<:rOwner__flora:1175788457516351580>",
          owner: "<:owner_trixo:1191730460427034745>",
          dev: "<:dev_trixo:1191730442521546852>",
          admin: "<:admin_trixo:1191730438650212473>",
          codev: "<:codev_trixo:1191730448959811584>",
          author: "<:author_trixo:1191730456333385819>",
          friend: "<:friend_trixo:1191730433193431161>",
          angel: "<:heart_flora:1191613717570404474>",
          vip: "<:vip_trixo:1191730469541269625>",
          premiumUser: "<:premuser_trixo:1191731653312270446>",
          mod: "<:mod_trixo:1191731648031633438>",
          staff: "<:staff_trixo:1191731661872836760>",
          supporter: "<:supporter_trixo:1191731669745545327>",
          user: "<:user_trixo:1191731656718041188>",
      };
      this.helpMenu = {
          music: "<:music_trixo:1191723200204242976>",
          home: "<:home_trixo:1191725451694059620>",
          filters: "<:filters_trixo:1191723208534142986>",
          info: "<:info_trixo:1191724035663478824>",
          settings: "<:settings_trixo:1191734707474415737>",
          moderation: "<:moderation_trixo:1200306176932462632>",
          utility: "<:utility_trixo:1191723194298671184>",
          allCommands: "<:allcmd_trixo:1191724056177803368>",
      };
      this.setup = {
          pause: "<a:pauseplay:1175848721959899246>",
          resume: "<:Resume:1175848855376515223>",
          skip: "<a:skip:1175849020497866814>",
          previous: "<:Previous:1175849257023066118>",
          shuffle: "<:shuffle:1175849805944197201>",
          author: "<:author:1175849969769525400>",
          nowPlaying: "<a:Playing:1175466820371742731>",
          requester: "<a:requester_astoria:1175850447941140560>",
          duration: "<a:trixo_m_time:1149968548941267024>",
          stop: "<:Stop:1175851326987571313>",
          loop: "<:loop_button:1175851610002440337>",
          volLow: "<:speaker_low_volume:1175851799253618779>",
          volHigh: "<:high_volume:1175852096071925790>",
          fav: "<a:favorite:1137974920081584269>",
          autoplay: "<:autoplayy:1175852470115774626>",
          filters: "<:filters:1149974881765695629>",
      };
      this.avonNew = {
          emote: "<a:botplaying:1129819082343063664>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          author: "<:author_flora:1175756101208256572>",
          pause: "<:pause_flora:1175756159278387282>",
          resume: "<:resume_flora:1175756223363158036>",
          skip: "<:skip_flora:1176147582356037704>",
          fav: "",
          previous: "<:skip_flora:1176147582356037704>",
          stop: "<:stop_flora:1175756028772626442>",
      };
      this.spotify = {
          emote: "<:Spotify:1175478136486494369>",
          filters: "<:filter_flora:1175441337722622115>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          pause: "<:pause_flora:1175756159278387282>",
          author: "<:author_flora:1175756101208256572>",
          resume: "<:resume_flora:1175756223363158036>",
          stop: "<:stop_flora:1175756028772626442>",
          loop: "<:loop_flora:1175759763154407484>",
          shuffle: "<:shuffle_flora:1176147704972333056>",
          forward: "<:skip_flora:1176147582356037704>",
          backward: "<:backward_flora:1176147635573366945>",
          volLow: "<:lowvol_flora:1175760416337559692>",
          volHigh: "<:highvol_flora:1175760342928850975>",
          previous: "<:skip_flora:1176147582356037704>",
          skip: "<:skip_flora:1176147582356037704>",
      };
      this.special = {
          emote: "<a:premium:1175845057618792510>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          pause: "<:pause_flora:1175756159278387282>",
          author: "<:author_flora:1175756101208256572>",
          resume: "<:resume_flora:1175756223363158036>",
          stop: "<:stop_flora:1175756028772626442>",
          loop: "<:loop_flora:1175759763154407484>",
          shuffle: "<:shuffle_flora:1176147704972333056>",
          forward: "<:skip_flora:1176147582356037704>",
          backward: "<:backward_flora:1176147635573366945>",
          volLow: "<:lowvol_flora:1175760416337559692>",
          volHigh: "<:highvol_flora:1175760342928850975>",
          previous: "<:skip_flora:1176147582356037704>",
          skip: "<:skip_flora:1176147582356037704>",
      };
      this.noButtons = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          author: "<:author_flora:1175756101208256572>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          filters: "<:filter_flora:1175441337722622115>",
      };
      this.simple = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_trixo:1204057784694603866>",
          author: "<:Author_trixo:1204057775596904518>",
          duration: "<:time_trixo:1204057771465773086>",
          previous: "<:previous_trixo:1197166527342968842>",
          filters: "<:filter_flora:1175441337722622115>",
          pause: "<:pause:1205857111691755572>",
          resume: "<:resume:1205857165089185902>",
          previous: "<:previous:1205856718232363109>",
          stop: "<:stop:1205857011175264257>",
          skip: "<:forward:1205856802667761774>",
          loop: "<:Loop:1205857296555712562>",
      };
      this.oldStyle = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          author: "<:author_flora:1175756101208256572>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
      };
  }
}
//# sourceMappingURL=Emoji.js.map