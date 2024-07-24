<template>
     
      <!-- Main content -->
      <div class="mt-95 pt-md-10 border-top">
        <div class="container">
          <div class="row">
            <!-- Example post -->
            <div class="col-12 col-sm-4 mb-4" v-for="post in posts" :key="post.id">
              <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
                <a :href="post.link" class="text-decoration-none">
                  <img
                    :src="post.coverImg"
                    :alt="post.title"
                    class="zoom-in img-fluid"
                    style="height: 300px; object-fit: cover;"
                  />
                </a>
              </div>
              <div class="mt-3">
                <h5 class="font-weight-bold text-dark">
                  <a :href="post.link" class="text-decoration-none text-dark">{{ post.title }}</a>
                </h5>
                <p class="text-muted">{{ post.category }}</p>
              </div>
            </div>
          </div>
          <!-- Pagination -->
          <div class="row">
            <div class="col-12 mt-4">
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  
  
  export default {
       data() {
      return {
        // Example posts data
        posts: [
          {
            id: 1,
            title: 'Post Title 1',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 1',
            link: '#'
          },
          {
            id: 2,
            title: 'Post Title 2',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 2',
            link: '#'
          },
          {
            id: 3,
            title: 'Post Title 3',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 3',
            link: '#'
          },
          {
            id: 4,
            title: 'Post Title 4',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 1',
            link: '#'
          },
          {
            id: 5,
            title: 'Post Title 5',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 2',
            link: '#'
          },
          {
            id: 6,
            title: 'Post Title 6',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 3',
            link: '#'
          },
          {
            id: 7,
            title: 'Post Title 7',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 1',
            link: '#'
          },
          {
            id: 8,
            title: 'Post Title 8',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 2',
            link: '#'
          },
          {
            id: 9,
            title: 'Post Title 9',
            coverImg: 'https://via.placeholder.com/300',
            category: 'Category 3',
            link: '#'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .pt-md-10 {
    padding-top: 10rem;
  }
  .border-top {
    border-top: 1px solid #dee2e6;
  }
  .text-dark {
    color: #343a40;
  }
  .text-muted {
    color: #6c757d;
  }
  .hover-card {
    transition: transform 0.2s;
  }
  .hover-card:hover {
    transform: scale(1.05);
  }
  .zoom-in {
    transition: transform 0.2s;
  }
  .zoom-in:hover {
    transform: scale(1.1);
  }
  </style>
  