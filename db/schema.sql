DROP DATABASE IF EXISTS epl_players;
CREATE DATABASE epl_players;
use epl_players;

CREATE TABLE player (
    player_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(20) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    alias VARCHAR(30) DEFAULT NULL,
    dob DATE NOT NULL,
    age TINYINT NOT NULL,
    birth_city VARCHAR(30) NOT NULL,
    birth_country VARCHAR(40) NOT NULL,
    positions VARCHAR(40),
    status ENUM('EPL Player', 'non-EPL Player', 'Retired', 'Deceased') NOT NULL,
    current_team VARCHAR(60) DEFAULT NULL,
    team_history MEDIUMTEXT DEFAULT NULL,
    fun_fact MEDIUMTEXT DEFAULT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_player_id PRIMARY Key (player_id)
);

CREATE TABLE team (
    team_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(40) NOT NULL,
    city VARCHAR(30) NOT NULL,
    yr_estd CHAR(4) NOT NULL,
    nickname VARCHAR(40),
    logo VARCHAR(40) NOT NULL,
    stadium VARCHAR(40) NOT NULL,
    current_league ENUM('Premier League', 'Championship', 'League One', 'League Two', 'National League', 'Other') NOT NULL
    current_manager VARCHAR(40) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_team_id PRIMARY KEY (team_id)
);

ALTER TABLE player ADD COLUMN national_team VARCHAR(30) DEFAULT NULL;

UPDATE player SET national_team = 'england' WHERE player_id = 1;