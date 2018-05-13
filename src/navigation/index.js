import { browserHistory } from "react-router";
export const navigation = {
  // Landing
  signIn: "/sign-in",
  goToSignIn: () => browserHistory.push(navigation.signIn),

  // Join
  join: "/join",
  goToJoin: () => browserHistory.push(navigation.join),

  // Steps
  joinStep: "/join/selection",
  goToSelection: () => browserHistory.push(navigation.joinStep),

  industries: "/join/industries",
  goToIndustries: () => browserHistory.push(navigation.industries),

  listIndustries: "/join/list-industries",
  goToListIndustries: () => browserHistory.push(navigation.listIndustries),

  location: "/join/location",
  goToLocation: () => browserHistory.push(navigation.location),

  startDate: "/join/start-date",
  goToStartDate: () => browserHistory.push(navigation.startDate),

  informaton: "/join/information",
  goToInformaton: () => browserHistory.push(navigation.informaton),

  thankYou: "/join/thank-you",
  goToThankYou: () => browserHistory.push(navigation.thankYou),

  forgotPassword: "/join/forgot-password",
  goToForgotPassword: () => browserHistory.push(navigation.forgotPassword),

  FtAddKAM: "/first-time/add-key-account-manager",
  goToFtAddKAM: () => browserHistory.push(navigation.FtAddKAM),

  FtAddRFM: "/first-time/add-regional-fleet-manager",
  goToFtAddRFM: () => browserHistory.push(navigation.FtAddRFM),

  FtAddCFM: "/first-time/add-company-fleet-manager",
  goToFtAddCFM: () => browserHistory.push(navigation.FtAddCFM),

  FtAddCars: "/first-time/add-cars",
  goToFtAddCars: () => browserHistory.push(navigation.FtAddCars),
};

export default navigation;
