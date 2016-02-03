# HackCU2016
Home page for [HackCU 2016](http://hackcu.org)

<br>
## Contributing
* Install node and npm (download node versions 4.x which auto-include npm 2.x)
* npm install -g grunt-cli

<br>
#### First time contributor:
```shell
# Shortcut for "npm install && grunt && open dist/index.html"
npm run newb

```

<br>
#### Continuing Contributors:
```shell
npm install #Only call first time or after a "git pull"
grunt #Call repeatedly
open dist/index.html #Only call first time, then refresh in browser
```

* Edit content in /src and build with grunt. Consider leaving a `grunt watch` process in another window during your development. This eliminates the need to type `grunt` over and over. Simply refresh the webpage that is open to `dist/index.html`

* Lint all custom JavaScript using the [eslint file](http://eslint.org/) provided.

* When adding node modules: `npm install --save <node_module_name>`

* When testing html file appearance manually in browser, from `/` run `npm run open`
