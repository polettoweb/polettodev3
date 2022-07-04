---
title: Refreshing an "old" way of doing React
slug: /blog/refreshing-an-old-way-of-doing-react
date: 2020-10-14
summary: In the last few days, ok almost a week, I've been busy trying to regain al my skills and memory in React without hooks...
tags: ["React", "Sass", "Redux", "Firebase"]
---

In the last few days, ok almost a week, I've been busy trying to regain al my skills and memory in React without hooks.
I didn't think it would ever happen but using hooks for basically everything, negatively impacted on my speed in using React "the old way."
Do you remember those things called Classes, lifecycles and Redux? I almost didn't. And I've discovered it "the hard way".

As part of keeping myself employable and green with the huge frontend ecosystem, I usually start a new side project trying to use one "old" technology and one new for learning and for keeping knowledge fresh as much as possible.

Waiting for my next primary assignment at my current job as a consultant, I've picked up some side projects with many different technologies. I've rewritten my portfolio three times. Two in Vue using Gridsome and Nuxt and one in React using Hooks and Gatsby.
Although it was a good exercise, my portfolio is an easy beast to tame, and it doesn't offer enough challenge for keeping myself ready for new demanding projects.

For these reasons, I've chosen to create a proof of concept of an eCommerce website built with React and Redux using all the techniques available before the release of hooks.
You may ask why. Aren't class-based components and Redux agonising towards death?
Almost. There still are cases where you would start a new project using class-based components and especially Redux, but, most of the time, it is a matter of maintaining projects that are already in place.
Nowadays, it is indeed easier to refactor a React component from class-based to functional with hooks, definitely more comfortable than migrate an application from jQuery to React. Still, big projects will take years to migrate to newer code if rewritten at all.
For these cases, it is still useful to practice with Redux and classes in React for being able to be proficient and quick on all kind of React projects, even older ones.

This project has been challenging, I was a bit rusty on class-based components, but the worst part was Redux. I never really liked this tool, I find it over-complicated and with a lot of verbosities. Still, I get the importance it has and the kind of situation in which it can be useful.
On the other hand, features like React-hooks and tools like Apollo cache start to be pretty stable, and they offer comparable solutions at a fraction of the complexity. But this is a topic for another blog.

I have tried, as stated on my self imposed challenge, to keep the level of difficulty high enough to become a challenge and to allow me to simulate a real-world case scenario of using these techniques.
I ended up using, of course, class-based components, Redux, Redux-persist for keeping the cart state, Sass scoped per component and Firebase for authentication.

If you are interested in looking at the way I've tackled the project, please have a look at the [Github's repo](https://github.com/polettoweb/ecommerce-react).
And [here](https://ecommerce-react-polettoweb.netlify.app/) is a working version.
