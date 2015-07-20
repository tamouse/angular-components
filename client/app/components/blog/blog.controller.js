// DONE: create the blog controller
// check blog.html for hints on what the controller
// should have/do
import _ from 'lodash';

export class BlogController {
  constructor() {
    this.message = 'Posts'
    this.posts = _.times(7, i => {
      return {
        title: `Post ${i}`,
        author: 'Zaphrod Beeblebrox',
        body: 'Lorem ipsum'
      }
    });
  }
}
