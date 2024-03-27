# DOCUMENTATION

## Technology Stack

- TypeScript
  
- Material UI v5 components library

- Authentication Methods via next-auth

- Redux-toolkit

- React Hooks API

- Redux & React Context API for State Management

- React Router

- Axios

- Code Splitting

- Multi-Language


## Pre-requisites

The project is based on node and next js. Please check the following prerequisites before jumping on it.

1- Node is the primary prerequisite. Open your command terminal and check using the 
```
node -v
```
```
c:\> node -v
v20.x.x
```
2- Package Manager - npm or yarn
```
c:\> npm -v
8.19.2
```

## Installation

>> Navigate to your root folder and write `npm i`

## Start

After package installation, you can start your app by using 
`npm run dev`
This will start your local server at 
[localhost](http://localhost:3000)

## Build & Deploy

This might be too early to deploy but it is always good to know how to deploy.

To build your app in production use 

`npm run build`

## Deploy for your live site

Change the base URL with your domain and build your application.

You can control this with the homepage field in your 
`package.json`
```
"homepage": "http://example.com"
```

## Folder Structure

A simple intuitive folder structure helps you to navigate easily without any hassle.

Under the
`Studyfans-Dashboard/`
 directory, You will find the following folder structure.

Studyfans-Dashboard
```
..
├── public
│   ├── assets             -> images in different directories
│   │   ├── images
│   │   │   ├── auth
│   │   │   ├── cards
│   │   │   ├── ...
│   │   ├── third-party
├── src              
│   ├── api
│   ├── app                -> different routes based on layouts
│   │   ├── (dashboard)
│   │   │   ├── landing
│   │   │   ├── universities
│   │   │   ├── ...
│   │   ├── (component)    
│   ├── components         -> components used in different pages
│   │   ├── cards
│   │   ├── logo
│   │   ├── ...
│   ├── contexts           -> State context for Login and other
│   ├── data               -> Static data for countries and other dummy data
│   ├── hooks              -> Custom hooks
│   ├── layout
│   │   ├── DashboardLayout 
│   │   ├── SimpleLayout
│   ├── menu-items         -> menu items for each main menu
│   │   ├── universities.tsx
│   │   ├── ...
│   ├── sections           -> styles-themes
│   │   ├── auth 
│   │   ├── dashboard
│   │   │   ├── university
│   │   ├── extra-pages
│   │   │   ├── contact
│   ├── themes             -> Contains application style and theme
│   ├── types              -> common types for Typescript.
│   │   ├── dashboard
│   │   │   ├── university.ts
│   ├── utils
│   │   ├── locales        -> different locale json files
│   │   ├── route-guard    -> Auth guard to prevent unexpected navigations
│   ├── views              -> list of next js files and directory
│   │   ├── app
│   │   ├── dashboard
│   │   ├── ...
│   ├── config.js              -> Template constant value and live customization
├── eslintrc.json
├── .prettierrc
├── jsconfig.json
├── next-env.d.js
├── next.config.js
├── package-lock.json      -> Package lock file.
├── package.json           -> Package json file.
├── README.md
├── yarn.lock              -> yarn lock file.
```
## State Management
Managing context, state and hooks

### Context API
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

We are using context for login methods - 
`JWT`

### Authentication
It uses next-auth for authentication system. Please refer their official site for [docs]https://next-auth.js.org/providers


## Axios API Calls

Mock API calls

Set default axios baseURL for call API
>> Open `.env` file and edit `REACT_APP_API_URL`.

.env
```
## Backend API URL
NEXT_APP_API_URL:
```

You can configure the same for next.js as well.

Axios has been configured in the folder 
`..src\utils\axios.js`

>> Backend API URL
NEXT_APP_API_URL:

You can configure the same for next.js as well.

Axios has been configured in the folder 
`..src\utils\axios.js`

## Project Configuration
Configuration option for the whole Template

Studyfans-Dashboard has a single source of truth for default configuration which lets users manage it effectively. It also makes it scalable for new configurations. you can set configs like font, border, theme layout, locale, etc. All those can be configured at 
`..src/config.js`

## Color Presets

How to change available color presets

Studyfans-Dashboard comes up with 6+ theme color presets. You can now change the available color presets by doing the following steps:

Color Preset files are available in the `src\themes\theme\` directory.
```
..
├── default.js
├── theme1.js
├── ..
├── ..
├── ..
├── theme8.js
```
Edit & Choose your desired preset color setting in the `src\config.js` file. Change the `presetColor` value to theme1, theme2 to theme6


## Theme/Style Configuration

Defines core of theme. How theme is being set using Material-UI.

Customize Able Pro with your theme. You can change the colors, the typography, and much more. Material-UI provides flexibility to change the style of the project in a single place and on top of it, we made it more centralized and consistent with the proper file structure.

### Theme configuration

The whole theme can be configured from the folder 
`..\src\themes`
 . Theme initialization starts in 
`index.js`
, where palette, typography, and component's overridable style exist.

You can check other settings like theme typography, palette, and components style override in the same folder. 
`..src\themes`

### How to customize it?
You might come across questions like how to change a theme's primary color? How to change the textbox or other components which can apply to an entire theme?

### Customize Theme Colors
To change the color of the theme, you can apply color directly to `..src\theme\palatte.js`

For instance, if you want to change color where theme.palette.primary.light is being used in a theme then, update following in 
`..src\themes\palatte.js`

### Customize Theme Typography

You can customize the typography used in the theme as well from the central place.

For instance, If you want to change font-weight the typography h5 to 900. To do that, open 
`..src\themes\typography.js`


### Customize MUI Component style
We have provided a central location to override any default style of any component. All the overrides styles exist in 
`src\themes\overrides`

You can add a default property for any MUI component and it will be applied everywhere. We emitted lines to view it better in the above code block but you can see many controls' styles overridden in the same file. Feel free to change it as per your need.

