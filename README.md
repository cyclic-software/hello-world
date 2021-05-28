# Hello World

The Cyclic Hello World Example App

## Deploy

🍴 - Fork this repo

📦 - Install Cyclic Github app (in preview) https://github.com/apps/cyclic-preview

👨‍💻 - Push code changes on your repo

📈 - Profit!

📪 - Let us know what you think `friends at cyclic.sh`

## How it works

The `/api` directory hosts all your path based api routes. Just add a file with

```javascript
module.exports.all = (req,res) => {
  res.json({"Thats":"all you need 😝"})
}
```

## FAQ

### Where is the service?

Your service lives at `${gh_owner}-${gh_repo}.cyclic-app.sh`

You can also find it under the details of the Cyclic App status check on the commit.
