import React, { Component } from "react";
import { UserConsumer } from "./userContext";
import { ChannelContext } from "../../App";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context {username}, channel context {channel}{" "}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
