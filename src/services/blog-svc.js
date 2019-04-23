import axios from 'axios';

const apiUrl = 'localhost:3000';

const getAllBlogs = () => {
  return axios.get(`${apiUrl}/blog/all`);
}

const getOneBlog = (slug) => {
  return axios.get(`${apiUrl}/blog/${slug}`);
}

export default { getAllBlogs, getOneBlog };
