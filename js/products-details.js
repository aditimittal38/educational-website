// // // Same array of courses
// // const courses = [
// //   {
// //     title: "JavaScript Course",
// //     description: "Learn JavaScript from basics to advanced with our expert teachers now!",
// //     image: "./course_images/javascript_img.jpg",
// //     difficulty: "Beginner",
// //   },
// //   {
// //     title: "Python Course",
// //     description: "Master Python programming from beginner to advanced level.",
// //     image: "./course_images/python_img.png",
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     title: "React Course",
// //     description: "Build modern, scalable web applications using React.",
// //     image: "./course_images/react_img.png",
// //     difficulty: "Advanced",
// //   },
// //   {
// //     title: "HTML & CSS Course",
// //     description: "Learn how to structure and style web pages using HTML and CSS.",
// //     image: "./course_images/html_css_img.jpg",
// //     difficulty: "Beginner",
// //   },
// //   {
// //     title: "Data Structures and Algorithms",
// //     description: "Understand data structures and algorithms with practical examples.",
// //     image: "./course_images/dsa_img.png",
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     title: "Node.js Course",
// //     description: "Build server-side applications using Node.js and Express.",
// //     image: "./course_images/nodejs_img.jpg",
// //     difficulty: "Intermediate",
// //   },
// //   {
// //     title: "Machine Learning",
// //     description: "Learn the basics of machine learning and build predictive models.",
// //     image: "./course_images/ml_img.jpg",
// //     difficulty: "Advanced",
// //   },
// //   {
// //     title: "Cybersecurity Basics",
// //     description: "Learn the fundamentals of cybersecurity and how to protect networks.",
// //     image: "./course_images/cybersecurity_img.jpg",
// //     difficulty: "Beginner",
// //   },
// //   {
// //     title: "Cloud Computing",
// //     description: "Understand cloud computing concepts and how to deploy cloud services.",
// //     image: "./course_images/cloud_img.jpg",
// //     difficulty: "Intermediate",
// //   },
// // ];

// // // Function to extract query parameter
// // function getQueryParam(param) {
// //   const urlParams = new URLSearchParams(window.location.search);
// //   return urlParams.get(param);
// // }

// // // Function to display course details
// // function displayCourseDetails() {
// //   const courseTitle = getQueryParam("course");
// //   if (!courseTitle) {
// //     document.getElementById("product-details-container").textContent =
// //       "Course not found!";
// //     return;
// //   }

// //   // Find the course by title
// //   const course = courses.find((c) => c.title === decodeURIComponent(courseTitle));

// //   if (!course) {
// //     document.getElementById("product-details-container").textContent =
// //       "Course not found!";
// //     return;
// //   }

// //   // Create course details dynamically
// //   const detailsContainer = document.getElementById("product-details-container");
// //   detailsContainer.innerHTML = `
// //     <div class="course-details-page">
// //       <img src="${course.image}" alt="${course.title}" class="course-details-image">
// //       <h1 class="course-details-title">${course.title}</h1>
// //       <p class="course-details-description">${course.description}</p>
// //       <p class="course-details-difficulty"><strong>Difficulty:</strong> ${course.difficulty}</p>
// //     </div>
// //   `;
// // }

// // // Call the function to display course details
// // displayCourseDetails();
// // Sample course data (same as the one in the main page)
// const courses = [
//   {
//     title: "JavaScript Course",
//     description: "Learn JavaScript from basics to advanced with our expert teachers now!",
//     image: "./course_images/javascript_img.jpg",
//     difficulty: "Beginner",
//     video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
//     resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
//   },
//   {
//     title: "Python Course",
//     description: "Master Python programming from beginner to advanced level.",
//     image: "./course_images/python_img.png",
//     difficulty: "Intermediate",
//     video: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
//     resources: "https://docs.python.org/3/tutorial/"
//   },
//   {
//     title: "React Course",
//     description: "Build modern, scalable web applications using React.",
//     image: "./course_images/react_img.png",
//     difficulty: "Advanced",
//     video: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
//     resources: "https://react.dev/learn"
//   },
//   {
//     title: "HTML and CSS Course",
//     description: "Learn the foundations of web development with HTML and CSS.",
//     image: "./course_images/html_css_img.png",
//     difficulty: "Beginner",
//     video: "https://www.youtube.com/watch?v=UB1O30fR-EE",
//     resources: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
//   },
//   {
//     title: "Node.js Course",
//     description: "Develop backend applications using Node.js and Express.",
//     image: "./course_images/node_img.png",
//     difficulty: "Intermediate",
//     video: "https://www.youtube.com/watch?v=Oe421EPjeBE",
//     resources: "https://nodejs.dev/en/learn"
//   }
// ];


// // Extract the course title from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const courseTitle = urlParams.get("course");

// // Find and display the course details
// const course = courses.find((c) => c.title === courseTitle);
// if (course) {
//   document.getElementById("course-title").textContent = course.title;
//   document.getElementById("course-image").src = course.image;
//   document.getElementById("course-image").alt = course.title;
//   document.getElementById("course-description").textContent = course.description;
//   document.getElementById("course-difficulty").textContent = `Difficulty: ${course.difficulty}`;
//   document.getElementById("course-video").href = course.video;
//   document.getElementById("course-resources").href = course.resources;
// } else {
//   document.getElementById("course-title").textContent = "Course not found";
// }
// Sample course data
const courses = [
  {
    title: "JavaScript Course",
    description: "Learn JavaScript from basics to advanced with our expert teachers now!",
    image: "./course_images/javascript_img.jpg",
    difficulty: "Beginner",
    video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  },
  {
    title: "Python Course",
    description: "Master Python programming from beginner to advanced level.",
    image: "./course_images/python_img.png",
    difficulty: "Intermediate",
    video: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    resources: "https://docs.python.org/3/tutorial/"
  },
  {
    title: "React Course",
    description: "Build modern, scalable web applications using React.",
    image: "./course_images/react_img.png",
    difficulty: "Advanced",
    video: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
    resources: "https://react.dev/learn"
  },
  {
    title: "HTML and CSS Course",
    description: "Learn the foundations of web development with HTML and CSS.",
    image: "./course_images/html_css_img.png",
    difficulty: "Beginner",
    video: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    resources: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
  },
  {
    title: "Node.js Course",
    description: "Develop backend applications using Node.js and Express.",
    image: "./course_images/node_img.png",
    difficulty: "Intermediate",
    video: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    resources: "https://nodejs.dev/en/learn"
  }
];

// Extract the course title from the URL
const urlParams = new URLSearchParams(window.location.search);
const courseTitle = urlParams.get("course");

// Find and display the course details
const course = courses.find((c) => c.title === courseTitle);

if (course) {
  document.getElementById("course-title").textContent = course.title;
  document.getElementById("course-image").src = course.image;
  document.getElementById("course-image").alt = course.title;
  document.getElementById("course-description").textContent = course.description;
  document.getElementById("course-difficulty").textContent = `Difficulty Level: ${course.difficulty}`;
  document.getElementById("course-video").href = course.video;
  document.getElementById("course-resources").href = course.resources;
} else {
  document.getElementById("product-details-container").innerHTML =
    "<p>Course not found. Please check the course title in the URL.</p>";
}
