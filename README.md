# DiscordRPC-Status
Long forgotten thing i've made, in contrast to the skidds, this one can refresh the large image
## Installing
For this to work you will need to install these node modules using **npm install \<module\>**:
- discord `not discord.js (these are two different things!)`
- discord-rpc

After that you'll have lots of useless modules that came bundled with these, ones that are crutial for this to work are:

- discord
- discord-rpc
- node-fetch
- ws

You can delete the remaining ones.

## Step-By-Step guide for HammerHead Sharks:
After installing:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications), click "New Aplication" and enter desired name,
2. Copy "Application ID" and paste it into the config in "ClientId" entry
3. Then go to "Rich Presence" and scroll down to "Rich Presence Assets" and upload images that you want to be displayed\
**note:** Make sure they're following this naming convention: name(number) name1, name2, name3 etc...
4. Once you're done with that, open **status.js** and replace "himehowa" with "name" ^\
`Assets in your folder, and Rich Presence Assets are different things! if you replace files in Assets nothing will change. I've included it only for the sake of it being an example on how you should name your files!`
And we're done here.
