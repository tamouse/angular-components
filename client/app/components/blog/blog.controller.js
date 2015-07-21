import _ from 'lodash';

export class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';

    this.posts = Posts.query();
  }
}
