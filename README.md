# MediaCatalogue - An Express App

## Set Up

```bash
obama@teben:~/workspaces/nodejs$ express --view=pug media-catalogue

   create : media-catalogue/
   create : media-catalogue/public/
   create : media-catalogue/public/javascripts/
   create : media-catalogue/public/images/
   create : media-catalogue/public/stylesheets/
   create : media-catalogue/public/stylesheets/style.css
   create : media-catalogue/routes/
   create : media-catalogue/routes/index.js
   create : media-catalogue/routes/users.js
   create : media-catalogue/views/
   create : media-catalogue/views/error.pug
   create : media-catalogue/views/index.pug
   create : media-catalogue/views/layout.pug
   create : media-catalogue/app.js
   create : media-catalogue/package.json
   create : media-catalogue/bin/
   create : media-catalogue/bin/www

   change directory:
     $ cd media-catalogue

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=media-catalogue:* npm start

obama@teben:~/workspaces/nodejs$ cd media-catalogue/
obama@teben:~/workspaces/nodejs/media-catalogue$ git init
Initialized empty Git repository in /data/sdb1/home/obama/workspaces/nodejs/media-catalogue/.git/
obama@teben:~/workspaces/nodejs/media-catalogue$ git add .
obama@teben:~/workspaces/nodejs/media-catalogue$ git aommit -a -m"initial check in"
git: 'aommit' is not a git command. See 'git --help'.

The most similar command is
        commit
obama@teben:~/workspaces/nodejs/media-catalogue$ git commit -a -m"initial check in"
[master (root-commit) d5af6fc] initial check in
 9 files changed, 191 insertions(+)
 create mode 100644 app.js
 create mode 100755 bin/www
 create mode 100644 package.json
 create mode 100644 public/stylesheets/style.css
 create mode 100644 routes/index.js
 create mode 100644 routes/users.js
 create mode 100644 views/error.pug
 create mode 100644 views/index.pug
 create mode 100644 views/layout.pug
obama@teben:~/workspaces/nodejs/media-catalogue$ 
```

Run `npm install` in the app's root directory. If recommended run `npm audit fix`