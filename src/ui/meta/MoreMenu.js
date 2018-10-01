// @flow
import React, { PureComponent as Component } from "react";
import { A } from "../common";
import { AppActions } from "../../model";
import type { User } from "../../model";
import packageJson from "../../../package.json";

type Props = {
  currentUser: ?User,
  actions: AppActions,
};

export default class MoreMenu extends Component<Props> {
  render() {
    let { actions } = this.props;
    return (
      <div className="MoreMenu">
        <A className="MoreMenu-item" onClick={this._onViewProfile}>
          View Profile
        </A>
        <A className="MoreMenu-item" onClick={actions.onLogout}>
          Log out
        </A>

        <div className="MoreMenu-about">
          <div className="MoreMenu-about-title">
            Shin KGS
            <span>v{packageJson.version}</span>
          </div>
          <div className="MoreMenu-about-links">
            <A className="MoreMenu-item" onClick={this._onFeedback}>
              Send Feedback
            </A>
            <a
              className="MoreMenu-item"
              href="https://twitter.com/jkkramer"
              target="_blank"
              rel="noopener noreferrer">
              By @jkkramer
            </a>
            <a
              className="MoreMenu-item"
              href="https://github.com/jkk/shinkgs"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            <a
              className="MoreMenu-item"
              href="https://beta.gokgs.com/"
              target="_blank"
              rel="noopener noreferrer">
              Official KGS
            </a>
          </div>
        </div>
      </div>
    );
  }

  _onViewProfile = () => {
    if (this.props.currentUser) {
      this.props.actions.onUserDetail(this.props.currentUser.name);
    }
  };

  _onFeedback = () => {
    this.props.actions.onShowFeedbackModal();
  };
}
