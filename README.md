# Rugby World Cup

## How to contribute to the site

**Important!** Please read this document carefully and follow our workflows and procedures for making changes and adding new features.

You will need:

* node
* npm
* gulp

We use the GitFlow process for managing our files.

We use a master branch, a development branch, and **feature branches**.

You will be working on **feature branches**.

#### Clone repo

Clone our GitHub repository onto your local machine:

```bash
$ git clone git@github.com:SidKandasamy/Rugby_World_Cup.git rugby
```

#### npm

Install npm to ensure you have the latest version of all plugin packages. Your workflow will break if you don't do this.

```bash
$ npm Install
```

We use the following plugins:

* gulp-sass - to compile Sass to CSS
* gulp-clean-css - to minify CSS
* gulp-rename - to rename concatenated files
* gulp-concat - to merge files
* gulp-uglify - to minify JavaScript
* browser-sync - to refresh browser on changes

#### Feature branch

Add a feature branch to work on locally:

```bash
$ git branch new-branch
$ git checkout new-branch
```

The first time you commit work from a new branch, run:

```bash
$ git push origin new-branch
```

#### Gulp

Before you add or change any files, run the gulp tasks in a separate terminal window. This will watch your files and automatically combine, minify and update the distribution JavaScript and CSS files.

```bash
$ gulp
```

`gulp` is setup as the default command, so just typing `gulp` and hitting enter is sufficient to initiate the watch function.

#### Auto-refresh

The index.html file will open in your default browser and update automatically without you having to manually refresh the page.

#### Commit / push / pull request

When you complete a portion of work, you must commit and push your changes to GitHub, and create a **pull request** to the Lead Tech Developer. Your code will be reviewed and hopefully approved. If changes are required before merging can take place, you will be notified. When approved, your **feature branch** will be merged into the **development branch**.

Make sure you are working on the **latest version** of all files. Regularly push your changes and pull new versions to keep all local and remote files up-to-date.

```bash
$ git pull development
```
