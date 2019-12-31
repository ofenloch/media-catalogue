# MediaCatalogue - An Express App

## Set Up The App's Skeleton

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

## Make the App aware of Code Changes by Demonizing it with *nodemon*

Run `npm install --save-dev nodemon` to install **nodemon** globally. Check if *package.json* contains this entry

```json
        "devDependencies": {
            "nodemon": "^1.19.1"
        }
```

If not add it your *package.json* below *"dependencies": {...}*. Additionally, we have to add an entry for starting the 
app in developemt mode below th "start" entry:

```json
        "devstart": "nodemon ./bin/www"
```

Now we can start the app with `npm run devstart` - or with `export PORT=9090 ; DEBUG=server:* & npm run devstart`.

Whe the server is running and we change some code, there will be a message like this

```code
      [nodemon] restarting due to changes...
```

## Use *dotenv* for Configuration

* Run `npm install --save dotenv` to install **dotenv**. 
* Add `require('dotenv').config();` at the beginning of file .app.js*
* Create a file *.env* in the app's root directory and configuration data.
* **Do NOT commit the file .env** since it may contain sensitive data (e.g. passwords)!
* Add *.env* to *.gitignore*

Example for *.env*:

```config
    DB_CONNECTION_LIMIT=10
    DB_HOST=fake.host.com
    DB_USER=ItsNotARealUser
    DB_PASSWORD=ThisIsAFakePassWord
    DB_NAME=ItsJustAnExample
    DB_DEBUG=false
    PRIMARY_LANGUAGE=de-de
    DEFAULTPORT=5588
```
You can use 'password: process.env.DB_PASSWORD' to confiugre stuff. See *mysql.service.js* for an example.