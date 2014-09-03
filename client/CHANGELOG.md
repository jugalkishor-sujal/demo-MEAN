# 0.3.2 (2014-04-15)

## Features

* Updated to bootstrap 3 and ui-bootstrap 0.10 ([55682310](git@github.com:jugalkishor-sujal/demo-MEAN/commit/55682310))

## Bug fixes

* Karma unit port changed to 9019 ([0c354e90](git@github.com:jugalkishor-sujal/demo-MEAN/commit/0c354e90))
* Updated Travis links to new name ([3346a704](git@github.com:jugalkishor-sujal/demo-MEAN/commit/3346a704))
* Typo in copy watch task. ([00834319](git@github.com:jugalkishor-sujal/demo-MEAN/commit/00834319))
* Vendor assets were ignored during watch ([a94bb652](git@github.com:jugalkishor-sujal/demo-MEAN/commit/a94bb652))




# 0.3.1 (2013-09-13)

## Features

* Page titles are now set via state objects ([33de8097](git@github.com:jugalkishor-sujal/ng-Jogging/commit/33de8097))
* Append pkg.version to JS and CSS ([90e1b71f](git@github.com:jugalkishor-sujal/ng-Jogging/commit/90e1b71f))
* Vendor CSS is copied and concatenated with the app's CSS ([dda8792c](git@github.com:jugalkishor-sujal/ng-Jogging/commit/dda8792c))
* Vendor assets are copied to the build too ([29502bff](git@github.com:jugalkishor-sujal/ng-Jogging/commit/29502bff))
* Treat JS in src/assets as assets (i.e. don't do anything with it) ([99b50751](git@github.com:jugalkishor-sujal/ng-Jogging/commit/99b50751))
* Added PhantomJS support ([89acf5f6](git@github.com:jugalkishor-sujal/ng-Jogging/commit/89acf5f6))
* Files for use only in testing are now configurable ([a04e663b](git@github.com:jugalkishor-sujal/ng-Jogging/commit/a04e663b))

## Bug fixes

* CopyPasteException in index.html comments ([3a0596a7](git@github.com:jugalkishor-sujal/ng-Jogging/commit/3a0596a7))
* Fixed typos in the README ([5ae95393](git@github.com:jugalkishor-sujal/ng-Jogging/commit/5ae95393)), ([8c362208](git@github.com:jugalkishor-sujal/ng-Jogging/commit/8c362208)), and ([6b617282](git@github.com:jugalkishor-sujal/ng-Jogging/commit/6b617282))
* Vendor files were added to build twice ([09277b74](git@github.com:jugalkishor-sujal/ng-Jogging/commit/09277b74))
* IE7 Font Awesome stylesheet pointed nowhere ([515673b1](git@github.com:jugalkishor-sujal/ng-Jogging/commit/515673b1))

# 0.3.0 (2013-06-25)

## Features
### build

* split build into build+compile ([97fb290d](https://github.com/jugalkishor-sujal/ng-Jogging/commits/97fb290d))
* Moved config to separate file ([ff5d8b58](https://github.com/jugalkishor-sujal/ng-Jogging/commits/ff5d8b58))
* Added grunt-bump to ease releasing ([27312de1](https://github.com/jugalkishor-sujal/ng-Jogging/commits/27312de1))
* Added changelog generation ([328d25d2](https://github.com/jugalkishor-sujal/ng-Jogging/commits/328d25d2))
* karma config managed automatically ([3384b6fd](https://github.com/jugalkishor-sujal/ng-Jogging/commits/3384b6fd))
* CoffeeScript support ([0f308f2f](https://github.com/jugalkishor-sujal/ng-Jogging/commits/0f308f2f))

### *

* switched to ui-router for state mgmt ([7bec0378](https://github.com/jugalkishor-sujal/ng-Jogging/commits/7bec0378))

## Bug fixes
### build

* Karma no longer hangs the watch (([f66cfcc6])(https://github.com/jugalkishor-sujal/ng-Jogging/commits/f66cfcc6))



# 0.2.0 (2013-05-10)

## Features
### build

* live reload added through grunt-watch ([653df741](https://github.com/jugalkishor-sujal/ng-Jogging/commits/653df741))

* Add grunt ng-min for annotation ([9c529ccb](https://github.com/jugalkishor-sujal/ng-Jogging/commits/9c529ccb))

### *

* far better Bower integration ([864c2656](https://github.com/jugalkishor-sujal/ng-Jogging/commits/864c2656))

* included AngularUI `utils` to use uiRoute ([df08e4be](https://github.com/jugalkishor-sujal/ng-Jogging/commits/df08e4be))






# 0.1.0 (2013-03-11)

## Features
### *

* Initial application structure ([7c149227](https://github.com/jugalkishor-sujal/ng-Jogging/commits/7c149227))

* improved navigation styling and added home page tpl ([e1a655e0](https://github.com/jugalkishor-sujal/ng-Jogging/commits/e1a655e0))

### app

* added current route indication to menu with appropriate unit test ([14d35da8](https://github.com/jugalkishor-sujal/ng-Jogging/commits/14d35da8))

### index

* improved navbar style and added additional links ([a7c4504c](https://github.com/jugalkishor-sujal/ng-Jogging/commits/a7c4504c))

### about

* Added an about page with some descriptive content ([290704ab](https://github.com/jugalkishor-sujal/ng-Jogging/commits/290704ab))

* Added placeholders demo to about page ([89a06e9f](https://github.com/jugalkishor-sujal/ng-Jogging/commits/89a06e9f))

### titleService

* dynamic title support) ([3db6ec2b](https://github.com/jugalkishor-sujal/ng-Jogging/commits/3db6ec2b))

* suffix is now customizable ([9f8b4c73](https://github.com/jugalkishor-sujal/ng-Jogging/commits/9f8b4c73))

### activeIfCurrentDirective

* created directory to test for current route ([0ac1f4b4](https://github.com/jugalkishor-sujal/ng-Jogging/commits/0ac1f4b4))

### home

* replaced placeholder text with mrktg copy ([dcaf7237](https://github.com/jugalkishor-sujal/ng-Jogging/commits/dcaf7237))

* added google +1 button ([98d3312b](https://github.com/jugalkishor-sujal/ng-Jogging/commits/98d3312b))



## Bug fixes
### build

* Removed unnecessary step from delta:unittest ([5ffbfd78](https://github.com/jugalkishor-sujal/ng-Jogging/commits/5ffbfd78))

* delta tasks that concat must also uglify ([926983f8](https://github.com/jugalkishor-sujal/ng-Jogging/commits/926983f8))

### test-config

* Change browser-name case, add browser list ([682b1ea4](https://github.com/jugalkishor-sujal/ng-Jogging/commits/682b1ea4))

### home

* corrected typo in tweet button URL ([b9920eea](https://github.com/jugalkishor-sujal/ng-Jogging/commits/b9920eea))

### testacular

* fixed typo in browser docstring ([11a60fa7](https://github.com/jugalkishor-sujal/ng-Jogging/commits/11a60fa7))




