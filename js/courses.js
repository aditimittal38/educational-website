
  // Array of course objects
  const courses = [
    {
      title: "JavaScript Course",
      description: "Learn JavaScript from basics to advanced with our expert teachers now!",
      image: "./course_images/javascript_img.jpg",
      difficulty: "Beginner",
    },
    {
      title: "Python Course",
      description: "Master Python programming from beginner to advanced level.",
      image: "./course_images/python_img.png",
      difficulty: "Intermediate",
    },
    {
      title: "React Course",
      description: "Build modern, scalable web applications using React.",
      image: "./course_images/react_img.png",
      difficulty: "Advanced",
    },
    {
      title: "HTML & CSS Course",
      description: "Learn how to structure and style web pages using HTML and CSS.",
      image: "./course_images/html_css_img.jpg",
      difficulty: "Beginner",
    },
    {
      title: "Data Structures and Algorithms",
      description: "Understand data structures and algorithms with practical examples.",
      image: "./course_images/dsa_img.png",
      difficulty: "Intermediate",
    },
    {
      title: "Node.js Course",
      description: "Build server-side applications using Node.js and Express.",
      image: "./course_images/nodejs_img.jpg",
      difficulty: "Intermediate",
    },
    {
      title: "Machine Learning",
      description: "Learn the basics of machine learning and build predictive models.",
      image: "./course_images/ml_img.jpg",
      difficulty: "Advanced",
    },
    {
      title: "Cybersecurity Basics",
      description: "Learn the fundamentals of cybersecurity and how to protect networks.",
      image: "./course_images/cybersecurity_img.jpg",
      difficulty: "Beginner",
    },
    {
      title: "Cloud Computing",
      description: "Understand cloud computing concepts and how to deploy cloud services.",
      image: "./course_images/cloud_img.jpg",
      difficulty: "Intermediate",
    },
    
  ];

 // Function to generate course cards
function displayCourses() {
  const coursesContainer = document.getElementById("courses");
  courses.forEach((course) => {
    // Create course card container
    const courseCard = document.createElement("div");
    courseCard.classList.add("course");

    // Create course image
    const courseImage = document.createElement("div");
    courseImage.classList.add("course-image");
    const img = document.createElement("img");
    img.src = course.image;
    img.alt = `${course.title}`;
    courseImage.appendChild(img);

    // Create course details container
    const courseDetails = document.createElement("div");
    courseDetails.classList.add("course-details");

    // Add course title
    const courseTitle = document.createElement("div");
    courseTitle.classList.add("course-title");
    courseTitle.textContent = course.title;

    // Add course description
    const courseText = document.createElement("div");
    courseText.classList.add("course-text");
    courseText.textContent = course.description;

    // Add difficulty level
    const courseDifficulty = document.createElement("div");
    courseDifficulty.classList.add("course-difficulty");
    courseDifficulty.textContent = `Difficulty: ${course.difficulty}`;

    // Create "View Details" button
    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View Details";
    viewDetailsButton.classList.add("course-button");

    // Add click event to redirect to a product details page
    viewDetailsButton.addEventListener("click", () => {
      // Example: redirect to a product details page (you can customize the URL)
      window.location.href = `product-details.html?course=${encodeURIComponent(course.title)}`;
    });

    // Append all elements to the course card
    courseDetails.appendChild(courseTitle);
    courseDetails.appendChild(courseText);
    courseDetails.appendChild(courseDifficulty);
    courseDetails.appendChild(viewDetailsButton);

    courseCard.appendChild(courseImage);
    courseCard.appendChild(courseDetails);

    // Append course card to courses container
    coursesContainer.appendChild(courseCard);
  });
}



// Call the function to render the courses
displayCourses();


