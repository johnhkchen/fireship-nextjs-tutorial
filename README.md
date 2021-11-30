nextjs-cypress

Bare-bones Next.js project with unit and integration testing set up.

Development:
1. Create a Docker dev environment pointed at this git repo
2. Docker will pull an image and insert the repo into a `code` directory
3. Navigate to the app directory and run `npm i` or `npm ci` to install node modules.
4. Use `npm run ...` to spin up server and execute tests. There's a README in the app directory which goes into further detail.