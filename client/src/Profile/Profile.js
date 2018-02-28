import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          
          <br/>
          <h3>{profile.name}</h3>
          <br/>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel> <Glyphicon glyph="user" /> 
              <h4>Username:{profile.nickname}</h4>
              <h4>Name:{profile.name}</h4>
              <h4>Last Login:{profile.updated_at}</h4></ControlLabel>
            </div>
            {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
