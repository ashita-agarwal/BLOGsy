const router = require("express").Router();
const Blog = require("../model/Blog");

// Add New blog

router.post("/",  async (req, res) => {
  const blog = new Blog({
     
    title: req.body.title,
    snippet:  req.body.snippet,
    body:  req.body.body,
  });

  try {
    const savedBlog = await blog.save();
    res.send(savedBlog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get All Blog

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get Single blog
router.get("/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    res.json(blog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update blog
router.put("/:blogId",  async (req, res) => {
  try {
    const blog = {
        
        title: req.body.title,
        snippet:  req.body.snippet,
        body:  req.body.body,
    };

    const updatedBlog = await Blog.findByIdAndUpdate(
      { _id: req.params.blogId },
      blog
    );
    res.json(updatedBlog);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete blog
router.delete("/:blogId",  async (req, res) => {
  try {
    const removeBlog = await Blog.findByIdAndDelete(req.params.blogId);
    res.json(removeBlog);
    
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;