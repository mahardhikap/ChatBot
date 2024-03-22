# ChatBot

## Table Of Contents

- [Prerequisite](#prerequisite)
- [Running Project](#running-project)

## Prerequisite

- Install NodeJS
- Install Android Studio or Scrcpy
- Install Java Development Kit (I'm using jdk 11.0.8)

for full instruction please follow this link https://reactnative.dev/docs/environment-setup?guide=native

## Running Project

1. Git clone this repository
2. Open the folder ChatBot in Visual Studio Code
3. Open terminal, then type `npm install`
4. Change this file `example.env.js` with your credentials key from google console. File must renamed to env.js after that. Make sure you have project Dialogflow, and set console key credentials first, then extract/download the credentials.
5. go to the folder android, type on terminal `./gradlew clean`
6. then, type this on terminal `adb reverse tcp:8081 tcp:8081`
7. after all setup is done, type `npm run android`

If you want to use release apk/don't want any setup. This is the build apk you can download:
https://drive.google.com/file/d/1UOhF4lRQ6cEeLLy_9KReoUdPwu3SLh-9/view?usp=drive_link
