<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://github.com/Lexicon-Digital/launchpad-react
[vscode]: https://code.visualstudio.com/
[miro]: https://miro.com/
[trello]: https://trello.com/en
[jira]: https://www.atlassian.com/software/jira
[linear]: https://linear.app/
[slack]: https://slack.com/intl/en-au
[discord]: https://discord.com/
[confluence]: https://www.atlassian.com/software/confluence
[teams]: https://learn.microsoft.com/en-us/microsoftteams/shared-channels
[githubIntegrations]: https://github.com/integrations 
<!-- prettier-ignore-end -->

# SpaceTitle

<!--
In one or two sentences, summarise and describe your project to help others understand the goal and purpose of the entire project.
-->

Brief Overview

## TABLE OF CONTENTS

1. [Project Description](#project-description)
2. [Installation](#installation)
3. [Copyright And Licensing](#copyright-and-licensing)

## Project Description

- What,
- Why,
- Challenges,
- Learnings,
- Upcoming features.

## Installation

### Prerequisites/Setup

- [git][git]
- [NodeJS v18][node] - Recommend installing `nvm` to manage node install
- [npm][npm]
- [VSCode][vscode] or an IDE of your choice

### For developers. Create a .env file with the below details

- REACT_APP_VERSION=GITHUB_RUN_NUMBER (added upon build in GitHub action in dev and prod)
- REACT_APP_STAGE=LOCAL
- REACT_APP_CHALLENGE_BASE_URL=https://3q82hpcgp1.execute-api.ap-southeast-2.amazonaws.com/prod
- REACT_APP_CHALLENGE_API_KEY=(API key here)

## Running & Testing (development environment) scripts

### Install

- `npm i` - to install packages/dependencies
- `npm run prepare` - to install husky and enable pre-commit hooks

### Run

- `npm run start` - to run project on port 3000

- `npm run lint` - to lint your files using ESLint
- `npm run lint:fix` - fix problems using ESLint

### Unit tests

- `npm run test` - to run jest tests with watch
- `npm run test:coverage` - to run jest tests with coverage

### End-to-end tests

Ensure application is started before running E2E tests
In cypress.config.ts find REPLACE_ME_WITH_BASE_URL and replace it with your localhost URL and REPLACE_ME_WITH_END_POINT_URL_HERE with backend API

- `npm run e2e` - to run cypress e2e tests with UI
- `npm run e2e:cli` - to run cypress e2e tests with no UI

### Production build script

- `npm run build` - build your project

# Development strategy

- Pull requests are as small as possible, while creating changes that are easily feature togglable
- The code created is tested to at least at **80% coverage**
- Comments are clear and useful, and mostly explain why instead of what

## Definition of ready

- A User Story is written in its typical narrative-like form **As** [kind of user] **I want** [some feature] **so that** [some benefit] and has Acceptance Criteria (AC) that are testable and fully understood by the team
- A Bug details expected state vs actual state, offers a step-by-step guide on how to reproduce the issue, includes environment details and may have additional assets attached
- Cards has been discussed and estimated by the team
- Kick-off has been completed and there are no questions / actions awaiting the card.
- Cards that touch on API integration have their API contract outlined within the card

## Definition of Done

- I have reviewed my own code
- I have verified that my code created matches the **development strategy**
- I have verified that all Acceptance Criteria (AC) are met
- I have verified that my commits are properly labelled
- I have updated any related documentation
- I have added appropriate tests for my new changes to at least 80% coverage
- I have verified that code passes the CI/CD review
- I have updated any existing tests related to my changes

## Copyright And Licensing

<!--
Add your copyright and licensing details here
-->
