import gulp from 'gulp';
import { path } from './gulp/config/path';

import { copy } from './gulp/tasks/copy';

global.app = {
  path: path,
  gulp: gulp,
};

gulp.task('default', copy);
