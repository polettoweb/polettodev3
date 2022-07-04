---
title: A differnet point of Vue
slug: /blog/a-different-point-of-vue
date: 2020-09-23
summary: The year was 2013, AngularJS, created by Google, was disrupting the web for a few years with its innovative concepts and solutions dethroning libraries like jQuery...
tags: ["vue", "frontend", "SEO", "SSR"]
canonical: https://cygnigroup.com/a-different-point-of-vue/
---

-- Originally written for [Cygnigroup.com](https://cygnigroup.com/a-different-point-of-vue/) --

## **INTRODUCTION**

The year was 2013, AngularJS, created by Google, was disrupting the web for a few years with its innovative concepts and solutions dethroning libraries like jQuery. In this environment, a young Google developer named Evan got involved in various AngularJS projects and starting unfolding his thoughts for the combination of Angular concepts and a lightweight implementation. The idea of VueJS sparkled from there and quickly took shape, reaching a release state at the beginning of the coming year.<br>
Developers started acknowledging the quality and potential of the framework and following its endeavours and transformations. Adoption rate commenced growing consistently, and the open-source project moved from a single developer to a team, including very talented developers, whom with time and dedication, transformed the framework into an entire ecosystem including dev-tools, state management library, routing, etc.<br>
Fast-forward to today, VueJS is one of the most famous JavaScript libraries, loved by developers and the default choice for massive communities, like the Laravel one or huge websites like GitLab.

## **INTRO TO REACTIVITY**

What is so relevant or innovative in VueJs for causing this level of success? The answer is: reactivity made easy. The concept of reactivity is a must for modern web development, and Vue gives you the mildest learning curve for adopting it.
Ok, but what is reactivity? And why it is so important? To explain what reactivity is, we need to start with what is it trying to solve.Browsers are very complex pieces of software. They regularly execute a vast number of operations keeping performances as their primary goal. Some of these operations are lightweight, and performing them is not an issue. Two of them, Layout and Paint, are however very demanding in terms of hardware resources, and the goal for a good website or application is to avoid their unnecessary executions.

![browser-rendering-pipeline](./images/browser-rendering-pipeline.jpg)

The above image represents the browser’s rendering pipeline split into main stages or actions. These actions are always executed contiguously and triggering one will always start the remaining ones until composite is finished.<br>
We could talk about the browser’s rendering pipeline for days given the number of essential concepts enclosed. For the sake of this article, let’s say, with some approximations, that every time we change specific CSS properties of a DOM element, we trigger a layout reflow. For example, the properties height, width or position, make all the pieces in that page move according to the new rules. This action is followed by a repaint which recreates all the page layers. In a small measure, the same applies to other CSS properties like background, text or shadows. These actions avoid the layout reflow but trigger the repaint of the entire page. This is the behaviour we want to avoid as much as possible for lighten the browser calculations and, therefore, improving our application performance.<br>
Back to the original question, reactivity is a solution for these performance issues.Vue, similarly to other frameworks, creates a virtual DOM, a much faster JavaScript representation of the real one, and performs all the necessary calculations in there. This technique allows us to modify on-demand the only part of the page that is subjected to changes without reflowing the entire screen. Vue, in fact, continually checks for differences between the real DOM and its JavaScript counterpart updating the browser only when it is strictly necessary and only for the essential parts.<br>Thanks to this, we can, for instance, have a notification icon signalling an incoming message without a full refresh of the page while using a fraction of the hardware resources. Or we can change a title without the need of reflowing and repaint the entire page.

## **PROs &amp; CONs OF VUE**

Given the above features, we can start to imagine the benefits that Vue can bring to our websites or applications.We can finally access features that were not user friendly before or that involved hard page refreshes and complex business logic. For instance, notifications; Nowadays, we give them for granted, but the reality is that they became majorly used by developers after the release of frameworks like Vue. Another significant improvement that Vue brings to the table is the concept of "state". In fact, it allows us to store in memory the value of properties of a component and trigger all wanted actions when these properties change. Furthermore, having a single source of truth for these properties allows developers to quickly change the value of all the components involved by the changed "state".<br>
In addition to the above, we have another clear pro for developers. Code structure and organisation hugely benefit from the introduction of single-file components. This allows developers to better organise the codebase of a project having template, script and styles scoped to the single element.The concept of codebase organisation is not new, and it has not been introduced by Vue. Still, Vue gives the possibility to implement it with minimal efforts and, therefore, it results in its improved adoption helping teams in working better and faster.<br>
Let's Vue all the things then, right? <br>Wait just a second. Vue is not a panacea, we cannot hope to put Vue into the mix and having a miracle product that solves everything ( "As seen on TV" cit). There are use cases where Vue excels, like single-page apps, dashboards, and all applications where, in general, you don't need SEO.<br>
On the other hand, there are cases were Vue is not the best choice out of the box. For instance, blogs, product list pages on eCommerce websites, and all that kind of applications where SEO is mandatory. <br>
The use of shadow DOM is, in fact, perfect for many aspects but detrimental for search engines optimisation given that all the data written on the page is injected via JavaScript. In the end, all that a search engine like Google will see is the HTML skeleton before Vue injection.

![Example of page seen by a search engine](./images/example-js-page.png)

Most search engines nowadays are evaluating JavaScript on applications for allowing them to be correctly indexed. Still, given the number of resources necessary to complete this task, these actions are relegated to a different and slower queue. This deferral is de facto too punishing for most companies that rely on SEO and the required budget for a marketing campaign is significantly higher given the needs of more powerful servers for evaluating JavaScript code.<br>
So, we will never be able to write blogs or eCommerce website entirely on Vue?No, of course not. We love Vue and want to use it as much as possible. Luckily for us, there are solutions for these problems, and they are all part of the Vue ecosystem.

## **ECOSYSTEM**

Despite the problems solved, Vue is a lightweight and straightforward framework that for many reasons, included speed and performance, delegates some jobs to other libraries developed both by the core team and by the community.These libraries allow developers to create many different types of applications, including multi-page (vue-router), requiring central state management (VueX), statically generated websites (Gridsome, VuePress), and server-side rendered apps (Nuxt)
In specific, Gridsome and Nuxt are the solutions to the cited SEO problems:<br>
The first of the two is a static website generator using a JAM stack or JavaScript, API, Markup solution for transforming your Vue application into a static and SEO friendly website. It basically fetches all the data from the desired source (Markdown, JSON, RestAPI) and creates all the necessary HTML pages. This technique allows the search engine's crawler to index all essential information about your site. At the same time, the user will get a hydrated version of your original application while loading the first HTML page and will continue the journey seamlessly.<br>
This solution is perfect for static websites like portfolios, blogs, landing pages, etc. and it bypasses the need for big servers. These websites can, in fact, be hosted into a CDN with a considerable boost in speed and performance and a sensible cut of costs.<br>
The latter is a server-side render or SSR solution. Without the immediate need of NodeJS (a server-side javascript library), it allows developers to choose if using server rendering or not with high specificity. This solution gives the same result as the previous one, but It differs in the way it is achieved. The code is not pre-rendered on the build time anymore. It is evaluated by the server when the page is requested whether it is a user or a search engine crawler doing that. This technique allows big websites or applications to dynamically generate a significant amount of pages on-demand without the need for running new builds.This kind of solution is perfect for eCommerce websites where we can have vast catalogues of products that are subjective to day to day changes.

## **OTHER PLATFORMS**

Vue usage doesn't stop with browsers. It can, in fact, be used in many other ways and for many different scenarios like multiplatform desktop and mobile applications.<br>
ElectronJS is a tool that allows us to use Vue as frontend language and build any kind of software that interact with all major operative systems. Visual Studio Code, Facebook Messenger, Twitch, Slack and inVision are all made with electron and used by millions of people. <br>
Every day more and more user interactions with the internet are done with a mobile device. Every brand on the planet has, sooner or later, to take tablets, smartphones or wearables devices into consideration for growing in popularity or market share. Generally, it is not if, but when this has to happen.<br>
NativeScript is coming to solve this problem for all Vue lovers out there. This product, in the same way as React native or Flutter, allows developers to build native applications for iOs and Android using JavaScript and in this case, Vue.

## **FUTURE & CONCLUSION**

Vue is still improving month after month with new functionalities and optimisations. Just a few days ago, during VueJS Global, Evan Yu announced the official release of Vue 3 with a lot of new features and quality of life changes for developers. <br>
It is indeed an excellent time to think about adopting Vue for your primary or side projects. It works for every team size because it is straightforward to pick, and it can be scaled up almost endlessly to fit the most complex projects and larger developers teams.<br>
In this article, I have covered only the tip of the iceberg regarding Vue. If you want to know more about it and to follow its future endeavours, I suggest you start with the official website. <br>
You will not only find one the most complete and well-written documentation for a framework, but also a vibrant and ready-to-help community.
