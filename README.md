![nlw-return-logo](/assets/nlw-logo.png)

This project is a crash course from 🚀[Rocketseat](https://www.rocketseat.com.br/)🚀 focused on building an app from start to finish.

##

> selected track: impulse
> The project consists of a widget feedback that can be integrated into any website or application.

- [x] 🌐 Web (Frontend)
- [x] ⚙️ Server (Backend)
- [x] 📱 Mobile

## [Click here](https://nlw-return-liard.vercel.app/) to test how it turned out!

# Technologies used

- Typescript
- NodeJS
- React
- React Native
- Expo
- Railway
- Vercel

# Libs and Tools

the following are some used libs that I would like to highlight them

- [headless.ui](https://headlessui.dev/)
- [phosphor icons](https://phosphoricons.com/)
- [Expo](https://expo.dev/)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app)

# 🏁 How to run locally 🏁

## ⚙️ Backend ⚙️

inside the server folder, you need to run the commands below:

```
  npm install                 //install the dependencies

  npx prisma migrate dev      //Create tables in the database

  npm run dev                 //run the service
```

![server-running](/assets/Server.png)

### Important!

<br>

> If you have docker you can run the database with the following line
>
> ```
> docker run --name postgres -e "POSTGRES_PASSWORD=Postgres2022!" -p 5432:5432 -d postgres
> ```

> Remember to create the .env file with the Postgresql database connection

##

> By default the website will run on port 3333.
>
> If you want to change the service port inside the .env file, create the environment variable PORT

## 🌐 Web (Frontend) 🌐

inside the web folder, you need to run the commands below:

```
  npm install           //install the dependencies

  npm run dev           //run the service
```

![website-feedget](/assets/WebWidgetFeedback.png)
![website-WidgetOpen](/assets/WebWidgetFeedbackIdea.png)
![website-WidgetSuccess](/assets/WebWidgetFeedbackSuccess.png)

### Important!

<br>

> By default the website will run on port 3000

> To connect with the backend remember to create the .env.local file (like the example file .env.example)

## 📱 Mobile 📱

inside the mobile folder, you need to run the commands below:

```
  yarn install                                //install the dependencies

  yarn start || npm run start || expo start   //run the service
```

### Important!

<br>

> To call the backend service it is necessary to change the ip in the file in the following path
>
> ```
> mobile/src/libs/api.ts
> ```

![mobile_1](/assets/mobile_1.jpg)
![mobile_2](/assets/mobile_2.jpg)
![mobile_3](/assets/mobile_3.jpg)
![mobile_4](/assets/mobile_4.jpg)

# Comments

This repository is aimed at my growth as a developer and with that I want to apply some good practices such as:

- [x] Documentation
- [x] [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
