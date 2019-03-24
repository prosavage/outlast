import {Meteor} from "meteor/meteor";
import App from "../imports/ui/App";
import React from "react";
import ReactDOM from "react-dom";
import {Users} from "../lib/Users"
import {Tracker} from 'meteor/tracker';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let users = Users.find().fetch();
    ReactDOM.render(<App users={users}/>, document.getElementById("app"))
  });
});