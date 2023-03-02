import gulp from 'gulp';

import { path, plugins } from './gulp/config/index.js';
import { copy, reset, html } from './gulp/tasks/index.js';

global.app = {
  path,
  gulp,
  plugins,
};

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
};

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);
