import React from 'react';
import './GameSettings.scss';
import Config from '../Config';

class GameSettings extends React.Component {

  render() {
    return (
      <div className="game-settings">
        {/* <h3 className="game-settings__title">Game Settings</h3> */}
        <h4 className="game-settings__subtitle">
          Game type
        </h4>
        <ul className="game-settings__options">
          <li className="game-settings__option">
            <button
              disabled={this.props.settings.gameType === Config.GAME_TYPE.HUMAN_VS_BOT}
            >Human VS Bot</button>
          </li>

          <li className="game-settings__option">
            <button
              disabled={this.props.settings.gameType === Config.GAME_TYPE.HUMAN_VS_HUMAN}
            >Human VS Human</button>
          </li>
        </ul>
        <h4 className="game-settings__subtitle">
          Bot level
        </h4>
        <ul className="game-settings__options">
          <li className="game-settings__option">
            <button 
              disabled={this.props.settings.botLevel === Config.BOT_LEVEL.EASY}
            >Easy</button>
          </li>

          <li className="game-settings__option">
            <button
              disabled={this.props.settings.botLevel === Config.BOT_LEVEL.INSANE}
            >Insane</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default GameSettings;