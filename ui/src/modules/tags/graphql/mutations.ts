const add = `
  mutation tagsAdd($name: String!, $type: String!, $colorCode: String) {
    tagsAdd(name: $name, type: $type, colorCode: $colorCode) {
      _id
    }
  }
`;

const edit = `
  mutation tagsEdit(
    $_id: String!
    $name: String!
    $type: String!
    $colorCode: String
  ) {
    tagsEdit(_id: $_id, name: $name, type: $type, colorCode: $colorCode) {
      _id
    }
  }
`;

const remove = `
  mutation tagsRemove($ids: [String!]!) {
    tagsRemove(ids: $ids)
  }
`;

const tagger = `
  mutation tagsTag($type: String!, $targetIds: [String!]!, $tagIds: [String!]!) {
    tagsTag(type: $type, targetIds: $targetIds, tagIds: $tagIds)
  }
`;

export default {
  add,
  edit,
  remove,
  tagger
};
