import React, { Component } from "react";
import KolloqeChatWidget from "./components/webchat/KolloqeChatWidget";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <KolloqeChatWidget
          position={"right"}
          title={this.props.webchatConfigs?.title || "Keyboard Experiment"}
          subtitle={this.props.webchatConfigs?.subtitle || "Welcome to the Keyboard Experiment"}
          defaultLang={"en"}
          avatar={true}
          avatarType={"text"}
          avatarLink={""}
          socketURL={
            this.props.webchatConfigs?.urlEndpoint || "http://localhost:5005/"
          }
          initPayload={this.props.webchatConfigs?.initPayload || "/greet"}
          reconnectTimeout={6000}
          widgetOptions={true}
          fullscreenButton={false}
          langSwitch={true}
          moreOptions={true}
          widgetOptionsPosition={"bottom"}
          hideWhenNotConnected={true}
          displayUnreadCount={true}
          showMessageDate={true}
          persistSession={true}
          triggerIntents={true}
          enableURLs={true}
          disablePreviousQuickReplies={true}
          indicatorDelay={0}
          indicatorType={"bouncing"}
          enableShortcuts={true}
          shortcutKey={81}
        />
      </div>
    );
  }
}
