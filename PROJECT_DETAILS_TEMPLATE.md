# Project Details Template

This template allows you to create detailed project pages that are automatically generated from your `user.js` configuration file.

## How to Use

### 1. Update your `user.js` file

For each project in your `INFO.projects` array, you can now add the following additional fields:

```javascript
{
  title: "Project Title",
  description: "Short description",
  fullDescription: "Detailed description of the project...",
  logo: "project-logo.jpg",
  linkText: "View Project",
  link: "https://github.com", // This is now optional
  technologies: ["React", "Node.js", "MongoDB"],
  images: ["image1.jpg", "image2.jpg", "video.mp4"],
  details: {
    role: "Lead Developer",
    duration: "6 months",
    teamSize: "4 members",
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description"
    ],
    achievements: [
      "Achievement 1 description",
      "Achievement 2 description"
    ]
  },
  github: "https://github.com/username/project",
  demo: "https://youtube.com/watch?v=example"
}
```

### 2. Required Fields

- `title`: Project title (used for URL generation)
- `description`: Short description for project cards
- `fullDescription`: Detailed description for the project details page
- `logo`: Main project image
- `technologies`: Array of technologies used
- `images`: Array of images/videos for the gallery
- `details`: Object containing project information

### 3. Optional Fields

- `github`: Link to GitHub repository
- `demo`: Link to demo video
- `link`: External link (now optional since projects link to details page)

### 4. URL Structure

Projects are accessible at: `/project/[project-id]`

The project ID is automatically generated from the title:
- "My Project" → `/project/my-project`
- "CAVEMAN" → `/project/caveman`

### 5. Features

- **Image Gallery**: Multiple images with navigation
- **Technology Tags**: Display all technologies used
- **Project Information**: Role, duration, team size
- **Challenges & Achievements**: Bullet-point lists
- **External Links**: GitHub and demo links
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Meta tags and descriptions

### 6. Adding New Projects

1. Add your project data to `INFO.projects` in `user.js`
2. Add project images to the `public/` folder
3. Update the `images` array with your image filenames
4. The project details page will be automatically generated

### 7. Customization

You can customize the styling by editing `src/pages/styles/projectDetails.css`.

The template uses CSS variables that match your existing site theme:
- `--main-color`
- `--secondary-color`
- `--text-color`
- `--background-color`
- `--border-color`

### 8. Example Project Entry

```javascript
{
  title: "My Awesome Project",
  description: "A brief description for the project card",
  fullDescription: "This is a comprehensive description of my project that will appear on the details page. It can be multiple sentences long and provide much more context about what the project does, how it works, and what problems it solves.",
  logo: "my-project.jpg",
  linkText: "View Project",
  link: "https://github.com",
  technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
  images: ["my-project.jpg", "screenshot1.png", "demo.mp4"],
  details: {
    role: "Full Stack Developer",
    duration: "3 months",
    teamSize: "2 members",
    challenges: [
      "Implementing real-time features",
      "Optimizing database queries",
      "Deploying to cloud infrastructure"
    ],
    achievements: [
      "Reduced load times by 60%",
      "Achieved 99.9% uptime",
      "Gained 1000+ active users"
    ]
  },
  github: "https://github.com/username/my-awesome-project",
  demo: "https://youtube.com/watch?v=my-demo"
}
```

This will create a project details page accessible at `/project/my-awesome-project` with all the information displayed in a beautiful, responsive layout. 