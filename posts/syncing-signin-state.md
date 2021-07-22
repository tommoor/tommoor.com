---
title: Syncing sign-in state
date: 2021-07-22T00:00:00Z
slug: syncing-signin-state
---

While adding some client-side data caching in [Outline](https://www.getoutline.com) this week I came across a nice detail that was added into the codebase a while ago and I had forgotten about – syncing sign-in state across tabs.

Because Outline is primarily for writing documents, we see a use case where users keep many Outline tabs open containing different docs. This makes maintaining a synchronized authentication state all the more important, it would not be a great experience to have stale auth that errors when you attempt to interact with a long-open tab.

Thankfully depending on your architecture this could be as simple as just a few lines of code…

![Outline signin state](/images/syncing-state.gif)

Outline is built using [MobX](https://mobx.js.org/) for state management. Local client state is split into multiple stores in the app, for example `users`, `documents`, `auth`. The [auth store](https://github.com/outline/outline/blob/main/app/stores/AuthStore.js) contains data related to authentication such as the current user and team – it also manages the persistence and subscriptions. There are essentially three parts to this feature:


* Syncing auth in MobX state to localStorage
* Listening to localStorage changes
* Updating local MobX state from received events


### Syncing MobX to localStorage

MobX has the concept of reactions; side effects that happen in response to changes in observed data. We use a handy MobX method, [autorun](https://mobx.js.org/reactions.html#autorun) that runs an effect whenever any of it’s dependencies change in order to write state to localStorage. For example, within the store constructor…


```javascript
autorun(() => {
  localStorage.setItem("AUTH_STORE", JSON.stringify(this.data));
});
```

### Listening to localStorage changes

Within the constructor we subscribe to the lesser-known `storage` event on the window. The [StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent) contains tons of useful information such as the `oldValue`, `newValue`, and the `key` that was changed, using this listener we can listen to localStorage changes **in other tabs** and react to them.

### Updating local MobX state from events

We check that the changed key matches our key for persisting auth data, parse the newValue and then act to either logout the user if the data no longer contains a user object (signed out) or to update the local MobX state from the event if the tab is currently signed out. A slightly simplified version looks like…

```javascript
window.addEventListener("storage", (event) => {
  if (event.key === "AUTH_STORE") {
    const data = JSON.parse(event.newValue);

    // If we're not signed in then hydrate from the received data, otherwise if
    // we are signed in and the received data contains no user then sign out
    if (isAuthenticated) {
      if (data.user === null) {
        this.logout();
      }
    } else {
      this.data = data;
    }
  }
});
```

The end result is another one of those little details so subtle you probably wouldn’t have noticed unless this post was written but it helps make the entire application feel more solid!