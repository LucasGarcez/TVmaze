# React Native TVMaze App

This is a React Native App to show information about TV series. The data are fetch from [TVMaze API](https://www.tvmaze.com/api).

### Mandatory Features

- [x] List all of the series contained in the API used by the paging scheme provided by the API.
- [x] Allow users to search series by name.
- [x] The listing and search views must show at least the name and poster image of the series.
- [x] After clicking on a series, the application should show the details of the series, showing the following information:

  - Name
  - Poster
  - Days and time during which the series airs
  - Genres
  - Summary
  - List of episodes separated by season

- [x] After clicking on an episode, the application should show the episode’s information, including:
  - Name
  - Number
  - Season
  - Summary
  - Image, if there is one

### Bonus (Optional)

- [ ] Allow the user to set a PIN number to secure the application and prevent unauthorized users.
- [ ] For supported phones, the user must be able to choose if they want to enable fingerprint authentication to avoid typing the PIN number while opening the app.
- [x] Allow the user to save a series as a favorite.
- [x] Allow the user to delete a series from the favorites list.
- [x] Allow the user to browse their favorite series in alphabetical order, and click on one to see its details.
- [ ] Create a people search by listing the name and image of the person.
- [ ] After clicking on a person, the application should show the details of that person, such as:

### Setup Environment

Project created with React Native CLI.[ See official docs](https://reactnative.dev/docs/environment-setup) to set up the environment.

### Run

**Install dependencies**

```
yarn
```

**Install IOS Pods**

```
cd ios && pod install
```

**Run IOS**

```
yarn ios
```

**Run Android**

```
yarn android
```

### 🛠 Tech and Libraries

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/): Routing and navigation
- [Async Storage](https://react-native-async-storage.github.io/async-storage/): Data storage system
- [Axios](https://github.com/axios/axios): Promise based HTTP client
- [React Query](https://react-query.tanstack.com/): Fetching, caching, synchronizing and updating server state

### App Screenshots

|                 |                   Android                    |                   IOS                    |
| :-------------: | :------------------------------------------: | :--------------------------------------: |
|   Home Screen   |   ![](docs/images/android/home-screen.png)   |   ![](docs/images/ios/home-screen.png)   |
| Favorite Screen | ![](docs/images/android/favorite-screen.png) | ![](docs/images/ios/favorite-screen.png) |
|  Show Details   |  ![](docs/images/android/show-details.png)   |  ![](docs/images/ios/show-details.png)   |
|  Show Seasons   |   ![](docs/images/android/show-season.png)   |   ![](docs/images/ios/show-season.png)   |
| Episode Details | ![](docs/images/android/episode-details.png) | ![](docs/images/ios/episode-details.png) |
|   Drawer Menu   |   ![](docs/images/android/drawer-menu.png)   |   ![](docs/images/ios/drawer-menu.png)   |
