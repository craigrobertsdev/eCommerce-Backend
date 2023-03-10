const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ include: [{ model: Product }] });

    if (!tagData) {
      res.status(404).send("No tags found!");
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).send("No tags found!");
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  /* req.body should look like:
    {
      tag_name: "metal",
      productIds: [1, 2, 3]
    }
  */
  const createdTag = await Tag.create(req.body);
  let createdProductTags;
  // if productIds were passed in the request body
  if (req.body.productIds.length) {
    // create a list of productId and tagId pairs to bulk create ProductTag junction tables
    const productTagIdArr = req.body.productIds.map((productId) => {
      return {
        tag_id: createdTag.id,
        productId,
      };
    });
    // create ProductTag tables
    createdProductTags = await ProductTag.bulkCreate(productTagIdArr);

    res.status(200).json(createdProductTags);
    return;
  }
  // if no productIds were passed, return
  res.status(200).json(createdTag);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
    if (!deletedTag) {
      res.status(404).send("No tag exists with that ID!");
      return;
    }

    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
