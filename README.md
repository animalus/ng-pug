# ng-pug

Gulp utils for using pug with angular.

## Usage

Create a `gulpfile.mjs` file and add the following.

Assuming a standard project in which your source code is under a "src" directory.

```mjs
import { addPugTasks } from "@animalus/ng-pug";
import gulp from "gulp";

addPugTasks(gulp);
```

This will add 2 tasks. `pug` which simply compiles all of your pug templates. And `pugwatch` which you can use to set up a watch to recompile on changes. I use the latter in conjunction with`ng serve`(I use`concurrent` to run them in parallel) so that a change in the template or code results in an update of the app.

## License

Copyright © 2023 Animal.us<ken@happywhale.com>

This work is free. You can redistribute it and/or modify it under the
terms of the [MIT License](https://opensource.org/licenses/MIT).
See LICENSE for full details.
