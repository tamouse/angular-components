// DONE: create factory for getting blog posts from api server
// and removing static data out from blogComponent and replacing
// it with this factory

const posts = ($resource, API) => {
  return $resource(API.url + '/posts');

};

posts.$inject = ['$resource', 'API'];

export {posts};