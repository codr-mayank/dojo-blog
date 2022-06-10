import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts');
      if (!data.ok) {
        throw Error('No data available, please try again later.');
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err;
      console.error((err || {}).message || 'Something went wrong');
    }
  }

  return {
    posts,
    error,
    load
  }
};

export default getPosts;
