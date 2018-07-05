# Chatarang

The final project for Xtern Bootcamp 2018 Session 3. Based on [Davey's version](https://github.com/xtbc18s3/chatarang).

## Day 7 Homework

* Add the [re-base](https://github.com/tylermcginnis/re-base) package to your project. At the command-line, type:

```shell
yarn add re-base
```

Confirm that `re-base` is now listed under `dependencies` in `package.json`.

* Update `base.js` to initialize and export `Rebase`.

_Hint_: `export default Rebase.createClass(db)`

* Use [`base.syncState()`](https://github.com/tylermcginnis/re-base#syncstateendpoint-options) to sync your messages with Firebase.

### Super Mega Bonus Credit Hyper Fighting

* Try to make authentication work with Firebase!

## Day 6 Homework

* Create and style more components, based on the `chat-static` content. There should be approximately one CSS file per component.

### Super Mega Bonus Credit Hyper Fighting

* Make a `SignIn` component with a form that takes a user name or email.
* When the form is submitted, save that user in the `state` of the `App` component.
* When `state.user` is not set, show the `SignIn` component.
* When `state.user` is set, show the `Main` component.

_Hint_: You need to figure out how to do **conditional rendering**.
