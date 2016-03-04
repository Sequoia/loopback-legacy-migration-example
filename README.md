# LoopBack legacy system migration demo

This demo app accompanies a blog post found here:
<https://strongloop.com/strongblog/migrating-a-legacy-system-to-loopback-even-with-complicated-data/>

## Be advised:
1. sqllite path config is different from blog post
2. ACME API is actually... us! :scream:
  `json-server` is used to serve parts
   from `remote-wholesaler-data/parts.json`. **Make sure to start the app with
   `npm start`** or else this "remote" server won't be running & our local API
   won't work
3. `sqlite3` install is required
